// NFT Minting Form Component
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller, FieldPath } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/wab/client/components/custom-components/NFTMintingForm/NFTMintingForm.scss';
import { PrimaryButton } from '@/wab/client/components/custom-components/PrimaryButton/PrimaryButton';
import { SecondaryButton } from '@/wab/client/components/custom-components/SecondaryButton/SecondaryButton';
import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { notification } from 'antd';
import { NOTIFICATION_MESSAGE } from '@/wab/client/constant/mesage.constant';
import { ENV } from '@/wab/shared/devflags';
import { CHAIN, LAUNCHER_CONTRACT_METHOD, LAUNCHPAD_MODULE } from '@/wab/client/constant/contract.constant';
import { Transaction } from "@mysten/sui/transactions";
import UploadSvgIcon from '@/wab/client/plasmic/plasmic_kit_icons/icons/PlasmicIcon__UploadSvg';
import TrashIcon from '@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Trash';

// Define the schema for form validation using zod
const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  royalty: z.string().refine(val => !isNaN(parseFloat(val)), {
    message: "Royalty must be a valid number"
  }).refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
    message: "Royalty must be greater tan or equal to 0"
  }).default('0'),
  milestones: z.array(
    z.object({
      time: z.date({ required_error: 'Date is required' }),
      description: z.string().optional(),
    })
  ).default([{ time: new Date(), description: '' }]),
  teamMembers: z.array(
    z.object({
      name: z.string().optional(),
      title: z.string().optional(),
      avatar: z.any().optional(), // For file uploads
    })
  ).optional(),
  itemImage: z.any().optional(), // For image upload
  itemName: z.string().min(1, { message: 'Item name is required' }),
  itemDescription: z.string().min(1, { message: 'Item description is required' }),
  attributes: z.array(
    z.object({
      type: z.string().optional(),
      value: z.string().optional(),
    })
  ).default([{ type: '', value: '' }]),
  hasPresale: z.boolean().optional(),
  presale: z.object({
    startTime: z.date(),
    endTime: z.date().nullable(),
    totalSlots: z.number().min(0),
    whitelistInfo: z.object({
      price: z.string().refine(val => !isNaN(parseFloat(val)), {
        message: "Price must be a valid number"
      }).refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Price must be a valid number"
      }).default('0'),
      startTime: z.date(),
      endTime: z.date().nullable(),
      totalNFTs: z.number().min(0),
      maxNFTsPerWallet: z.number().min(0),
    }),
  }),
  hasPublicSale: z.boolean(),
  publicSale: z.object({
    price: z.string().refine(val => !isNaN(parseFloat(val)), {
      message: "Price must be a valid number"
    }).refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: "Price must be greater than or equal to 0"
    }).default('0'),
    startTime: z.date(),
    endTime: z.date().nullable(),
    totalNFTs: z.number().min(0),
    maxNFTsPerWallet: z.number().min(0),
  }),
  previewImageData: z.string().optional(),
});

// Typescript type inference from zod schema
type FormData = z.infer<typeof formSchema>;

const FieldsNameByStep = {
  1: ['name', 'description', 'royalty', 'milestones', 'teamMembers'],
  2: ['itemImage', 'itemName', 'itemDescription', 'attributes'],
  3: ['hasPresale', 'presale', 'hasPublicSale', 'publicSale'],
  4: [],
  5: []
}


const NFTMintingForm = ({ onCreateCollectionSuccess, projectId }: {
  onCreateCollectionSuccess: VoidCallback;
  projectId: string;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 5;
  const currentWalletAccount = useCurrentAccount();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Create storage key based on wallet address and project ID
  const getStorageKey = () => {
    if (!currentWalletAccount?.address || !projectId) { return null; }
    return `launchpad_form_data_${currentWalletAccount.address}_${projectId}`;
  };

  // Load form data from localStorage - moved up so it can be used during form initialization
  const loadFormData = (): Partial<FormData> | null => {
    const storageKey = getStorageKey();
    if (!storageKey) { return null; }

    try {
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const parsedData = JSON.parse(savedData) as Partial<FormData>;

        // Convert ISO date strings back to Date objects
        if (parsedData.presale?.startTime) { parsedData.presale.startTime = new Date(parsedData.presale.startTime); }
        if (parsedData.presale?.endTime) { parsedData.presale.endTime = parsedData.presale.endTime ? new Date(parsedData.presale.endTime) : null; }
        if (parsedData.presale?.whitelistInfo?.startTime) { parsedData.presale.whitelistInfo.startTime = new Date(parsedData.presale.whitelistInfo.startTime); }
        if (parsedData.presale?.whitelistInfo?.endTime) {
          parsedData.presale.whitelistInfo.endTime = parsedData.presale.whitelistInfo.endTime ?
            new Date(parsedData.presale.whitelistInfo.endTime) : null;
        }
        if (parsedData.publicSale?.startTime) { parsedData.publicSale.startTime = new Date(parsedData.publicSale.startTime); }
        if (parsedData.publicSale?.endTime) { parsedData.publicSale.endTime = parsedData.publicSale.endTime ? new Date(parsedData.publicSale.endTime) : null; }

        if (parsedData.milestones) {
          parsedData.milestones = parsedData.milestones.map((milestone: any) => ({
            ...milestone,
            time: new Date(milestone.time)
          }));
        }

        return parsedData;
      }
    } catch (error) {
      console.error('Error loading form data from localStorage:', error);
    }
    return null;
  };

  // Load saved data first to use for defaults
  const savedData = loadFormData();

  // Set preview image from saved data if it exists
  useEffect(() => {
    if (savedData?.previewImageData) {
      setPreviewImage(savedData.previewImageData);
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Use saved values if available, fallback to defaults
      name: savedData?.name || '',
      description: savedData?.description || '',
      royalty: savedData?.royalty || '0',
      milestones: savedData?.milestones || [],
      itemName: savedData?.itemName || '',
      itemDescription: savedData?.itemDescription || '',
      attributes: savedData?.attributes || [{ type: '', value: '' }],
      teamMembers: savedData?.teamMembers || [],
      hasPresale: savedData?.hasPresale || false,
      presale: savedData?.presale || {
        startTime: new Date(),
        endTime: null,
        totalSlots: 0,
        whitelistInfo: {
          price: '0',
          startTime: new Date(),
          endTime: null,
          totalNFTs: 0,
          maxNFTsPerWallet: 0,
        },
      },
      hasPublicSale: savedData?.hasPublicSale || false,
      publicSale: savedData?.publicSale || {
        price: '0',
        startTime: new Date(),
        endTime: null,
        totalNFTs: 0,
        maxNFTsPerWallet: 0,
      }
    }
  });

  const { mutateAsync: signAndExecuteTransaction, isPending } =
    useSignAndExecuteTransaction({
      onSuccess: () => {
        notification.success({
          message: NOTIFICATION_MESSAGE.CREATE_COLLECTION.MESSAGE,
          description: NOTIFICATION_MESSAGE.CREATE_COLLECTION.DESCRIPTION,
        });
      },
    });


  // Field arrays for dynamic fields
  const {
    fields: milestoneFields,
    append: appendMilestone,
    remove: removeMilestone,
  } = useFieldArray<FormData, "milestones">({
    control,
    name: 'milestones',
  });

  const {
    fields: teamMemberFields,
    append: appendTeamMember,
    remove: removeTeamMember,
  } = useFieldArray<FormData, "teamMembers">({
    control,
    name: 'teamMembers',
  });

  const {
    fields: attributeFields,
    append: appendAttribute,
    remove: removeAttribute,
  } = useFieldArray<FormData, "attributes">({
    control,
    name: 'attributes',
  });

  const onSubmit = async (formData: FormData) => {
    // Ensure default values for Pre-sales and Public sales if not selected
    if (!formData.hasPresale) {
      formData.presale = {
        startTime: new Date(),
        endTime: null,
        totalSlots: 0,
        whitelistInfo: {
          price: "0",
          startTime: new Date(),
          endTime: null,
          totalNFTs: 0,
          maxNFTsPerWallet: 0,
        },
      };
    }
    if (!formData.publicSale) {
      formData.publicSale = {
        price: "0",
        startTime: new Date(),
        endTime: null,
        totalNFTs: 0,
        maxNFTsPerWallet: 0,
      };
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      console.log('Final form data:', formData);

      notification.info({
        message: NOTIFICATION_MESSAGE.IMPORT_COLLECTION.WAITING,
      });

      // Convert JS Date timestamps to u64 (seconds)
      const convertToSeconds = (date: Date | null): number => {
        return date ? Math.floor(date.getTime() / 1000) : 0;
      };

      const whitelistStartTime = convertToSeconds(formData.presale.whitelistInfo.startTime);
      const whitelistEndTime = convertToSeconds(formData.presale.whitelistInfo.endTime);
      const presaleStartTime = convertToSeconds(formData.presale.startTime);
      const presaleEndTime = convertToSeconds(formData.presale.endTime);
      const publicSaleStartTime = convertToSeconds(formData.publicSale.startTime);
      const publicSaleEndTime = convertToSeconds(formData.publicSale.endTime);

      // For demo purposes, we're assuming itemImage would be processed and have a URL
      // In a real app, you would upload the image first and get the URL
      const imageUrl = "placeholder_image_url";

      // Convert royalty percentage to basis points (e.g., 5% -> 500)
      const royaltyBasisPoints = Math.floor(Number(formData.royalty || '0') * 100);

      const tx = new Transaction();

      tx.setGasBudget(100000000);

      tx.moveCall({
        target: `${ENV.LAUNCHPAD_PACKAGE_ID}::${LAUNCHPAD_MODULE}::${LAUNCHER_CONTRACT_METHOD.CREATE_COLLECTION}`,
        arguments: [
          tx.object(ENV.LAUNCHPAD_CAP_ID), // launchpad_cap
          tx.pure.vector("u8", Array.from(new TextEncoder().encode(formData.name))), // collection_name
          tx.pure.vector("u8", Array.from(new TextEncoder().encode(formData.description))), // collection_description
          tx.pure.vector("u8", Array.from(new TextEncoder().encode(imageUrl))), // image_url
          tx.pure.u64(royaltyBasisPoints), // royalty_fee
          tx.pure.bool(formData.hasPresale || false), // has_presale
          tx.pure.u64(whitelistStartTime), // whitelist_start_time
          tx.pure.u64(whitelistEndTime), // whitelist_end_time
          tx.pure.u64(presaleStartTime), // presale_start_time
          tx.pure.u64(presaleEndTime), // presale_end_time
          tx.pure.u64(Number(formData.presale.whitelistInfo.price) || 0), // presale_nft_price
          tx.pure.vector("address", []), // presale_whitelisted_users (empty for now)
          tx.pure.u64(formData.presale.whitelistInfo.totalNFTs || 0), // presale_total_nfts
          tx.pure.u64(formData.presale.whitelistInfo.maxNFTsPerWallet || 0), // presale_max_nfts_per_wallet
          tx.pure.u64(publicSaleStartTime), // public_sale_start_time
          tx.pure.u64(publicSaleEndTime), // public_sale_end_time
          tx.pure.u64(Number(formData.publicSale.price) || 0), // public_sale_nft_price
          tx.pure.u64(formData.publicSale.maxNFTsPerWallet || 0), // nft_per_user
          tx.pure.u64(formData.publicSale.totalNFTs || 0), // total_supply
        ],
      });

      // Process the form data here
      await signAndExecuteTransaction({
        transaction: tx,
        chain: CHAIN,
      });

      const storageKey = getStorageKey();
      if (!storageKey) { return }

      // Clear localStorage after successful submission
      localStorage.removeItem(storageKey);
      onCreateCollectionSuccess();
    }
  };

  const handleFileChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file uploads - in a real app, you'd store this
    console.log('File selected for team member', index, e.target.files?.[0]);
  };

  const handleItemImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const formValues = watch();

  useEffect(() => {
    const timer = setTimeout(() => {
      saveFormData(formValues);
    }, 500);
    return () => clearTimeout(timer);
  }, [formValues]);

  // Save form data to localStorage
  const saveFormData = (data: FormData) => {
    const storageKey = getStorageKey();
    if (!storageKey) { return }

    try {
      // Create a copy to avoid modifying the original data
      const dataToSave = JSON.parse(JSON.stringify(data));

      // Remove file objects which can't be serialized
      if (dataToSave.itemImage instanceof File) {
        delete dataToSave.itemImage;
      }

      if (dataToSave.teamMembers) {
        dataToSave.teamMembers = dataToSave.teamMembers.map((member: any) => {
          const memberCopy = { ...member };
          if (memberCopy.avatar instanceof File) {
            delete memberCopy.avatar;
          }
          return memberCopy;
        });
      }

      // Save preview image data
      if (previewImage) {
        dataToSave.previewImageData = previewImage;
      }

      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    } catch (error) {
      console.error('Error saving form data to localStorage:', error);
    }
  };

  useEffect(() => {
    if (savedData) {
      reset({
        name: savedData.name || '',
        description: savedData.description || '',
        royalty: savedData.royalty || '0',
        milestones: savedData.milestones || [{ time: new Date(), description: '' }],
        itemName: savedData.itemName || '',
        itemDescription: savedData.itemDescription || '',
        attributes: savedData.attributes || [{ type: '', value: '' }],
        teamMembers: savedData.teamMembers || [],
        hasPresale: savedData.hasPresale || false,
        presale: savedData.presale || {
          startTime: new Date(),
          endTime: null,
          totalSlots: 0,
          whitelistInfo: {
            price: "0",
            startTime: new Date(),
            endTime: null,
            totalNFTs: 0,
            maxNFTsPerWallet: 0,
          },
        },
        hasPublicSale: savedData.hasPublicSale || false,
        publicSale: savedData.publicSale || {
          price: "0",
          startTime: new Date(),
          endTime: null,
          totalNFTs: 0,
          maxNFTsPerWallet: 0,
        },
        itemImage: savedData.itemImage,
        previewImageData: savedData.previewImageData,
      });

      // Restore preview image if it was saved
      if (savedData.previewImageData) {
        setPreviewImage(savedData.previewImageData);
      }
    }
  }, [currentWalletAccount?.address, projectId, reset]);

  useEffect(() => {
    // Save form data whenever it changes (debounce this if performance is an issue)
    if (formValues && currentWalletAccount?.address) {
      const dataToSave = { ...formValues };
      if (previewImage) {
        dataToSave.itemImage = previewImage;
      }
      saveFormData(dataToSave);
    }
  }, [formValues, previewImage, currentWalletAccount?.address, projectId]);

  return (
    <div className="nft-minting-container">
      <div className="wallet-address-group">
        <label htmlFor="wallet-address">Wallet Address</label>
        <div className="wallet-input-wrapper">
          <input
            value={currentWalletAccount?.address}
            id="wallet-address"
            type="text"
            readOnly
            className="wallet-input"
          />
        </div>
      </div>
      <div className="progress-bar">
        {Array.from({ length: TOTAL_STEPS }).map((_, idx) => (
          <div
            key={idx}
            className={`progress-step ${idx + 1 === currentStep ? 'active' : ''} ${idx + 1 < currentStep ? 'completed' : ''}`}
          />
        ))}
      </div>

      <div className="step-indicator">Step {currentStep}/{TOTAL_STEPS}</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Wallet Address Section - Display on all steps */}


        {currentStep === 1 && <>
          <h2 className="section-title">Collection Information</h2>
          <p className="section-description">Please fill out the collection information below</p>
          <div className="form-group">
            <label htmlFor="name">
              Name<span className="required">*</span>
            </label>
            <input
              id="name"
              placeholder="Enter collection name"
              {...register('name')}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description<span className="required">*</span>
            </label>
            <textarea
              id="description"
              placeholder="Enter collection description"
              {...register('description')}
              className={errors.description ? 'error' : ''}
            />
            {errors.description && <span className="error-message">{errors.description.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="royalty">
              Royalty<span className="required">*</span>
            </label>
            <div className="royalty-input">
              <Controller
                name="royalty"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    inputMode="decimal"
                    value={field.value as string}
                    id="royalty"
                    placeholder="Enter collection royalty fees"
                    onChange={(e) => field.onChange(e.target.value)}
                    className={errors.royalty ? 'error' : ''}
                  />
                )}
              />
              <span className="input-suffix">%</span>
            </div>
            {errors.royalty && <span className="error-message">{errors.royalty.message}</span>}
          </div>

          {/* <div className="form-group">
            <label>Vision</label>
            <div className="milestones">
              {milestoneFields.map((field, index) => (
                <div key={field.id} className="milestone-row">
                  <Controller
                    control={control}
                    name={`milestones[${index}].time` as any}
                    render={({ field: subField }) => {
                      return <DatePicker
                        selected={subField.value}
                        onChange={(date) => subField.onChange(date)}
                        placeholderText="Milestone Time"
                        className="milestone-date"
                      />
                    }}
                  />
                  <input
                    {...register(`milestones.${index}.description`)}
                    placeholder="Describe milestone"
                    className="milestone-description"
                  />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeMilestone(index)}
                  >
                    <i className="trash-icon"><TrashIcon color='#85858B' /></i>
                  </button>
                </div>
              ))}
              <SecondaryButton
                type="button"
                className="add-button"
                onClick={() => appendMilestone({ time: new Date(), description: '' })}
              >
                + Add milestone
              </SecondaryButton>
            </div>
          </div> */}

          {/* <div className="form-group">
            <label>Team</label>
            <div className="team-members">
              {teamMemberFields.map((field, index) => (
                <div key={field.id} className="team-member-row">
                  <div className="avatar-container">
                    <label htmlFor={`avatar-${index}`} className="avatar-button">
                      <i className="upload-icon">📷</i>
                    </label>
                    <input
                      id={`avatar-${index}`}
                      type="file"
                      onChange={handleFileChange(index)}
                      className="hidden-input"
                      accept="image/*"
                    />
                  </div>
                  <input
                    {...register(`teamMembers.${index}.name`)}
                    placeholder="Name"
                    className="team-name"
                    defaultValue={field.name}
                  />
                  <input
                    {...register(`teamMembers.${index}.title`)}
                    placeholder="Title"
                    className="team-title"
                    defaultValue={field.name}
                  />
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeTeamMember(index)}
                  >
                    <i className="trash-icon"><TrashIcon color='#85858B' /></i>
                  </button>
                </div>
              ))}
              <SecondaryButton
                type="button"
                className="add-button"
                onClick={() => appendTeamMember({ name: '', title: '', avatar: null })}
              >
                + Add team member
              </SecondaryButton>
            </div>
          </div> */}
        </>}

        {currentStep === 2 && (
          <>
            <h2 className="section-title">Item Information</h2>
            <p className="section-description">Please fill out the item information below</p>

            <div className="form-group">
              <label htmlFor="itemImage">
                Image<span className="required">*</span>
              </label>
              <div className="image-upload-container">
                {previewImage ? (
                  <div className="image-preview">
                    <img src={previewImage} alt="Preview" />
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={() => setPreviewImage(null)}
                    >
                      <TrashIcon color='#85858B' />
                    </button>
                  </div>
                ) : (
                  <div className="image-upload-label" onClick={() => document.getElementById('itemImage')?.click()}>
                    <UploadSvgIcon className='upload-icon' />
                    <span>Upload image</span>
                  </div>
                )}
                <input
                  id="itemImage"
                  type="file"
                  accept="image/*"
                  {...register('itemImage')}
                  className={`hidden-input ${errors.itemImage ? 'error' : ''}`}
                  onChange={handleItemImageChange}
                />
              </div>
              {errors.itemImage && <span className="error-message">{errors.itemImage?.message?.toString() || ""}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="itemName">
                Name<span className="required">*</span>
              </label>
              <input
                id="itemName"
                placeholder="Enter item name"
                {...register('itemName')}
                className={errors.itemName ? 'error' : ''}
              />
              {errors.itemName && <span className="error-message">{errors.itemName.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="itemDescription">
                Description<span className="required">*</span>
              </label>
              <textarea
                id="itemDescription"
                placeholder="Enter item description"
                {...register('itemDescription')}
                className={errors.itemDescription ? 'error' : ''}
              />
              {errors.itemDescription && <span className="error-message">{errors.itemDescription.message}</span>}
            </div>

            <div className="form-group">
              <label>Traits</label>
              <div className="attributes">
                {attributeFields.map((field, index) => (
                  <div key={field.key} className="attribute-row">
                    <div className="attribute-inputs">
                      <input
                        {...register(`attributes.${index}.type`)}
                        placeholder="Type"
                        className="attribute-type"
                      />
                      <input
                        {...register(`attributes.${index}.value`)}
                        placeholder="Value"
                        className="attribute-value"
                      />
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeAttribute(index)}
                      >
                        <i className="trash-icon"><TrashIcon color='#85858B' /></i>
                      </button>
                    </div>
                  </div>
                ))}
                <SecondaryButton
                  type="button"
                  className="add-button"
                  onClick={() => appendAttribute({ type: '', value: '' })}
                >
                  + Add Trait
                </SecondaryButton>
              </div>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="section-title">Sales Information</h2>
            <p className="section-description">Configure Pre-sales and Public sales information</p>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('hasPresale')}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Pre-sales</span>
              </label>
            </div>

            {watch('hasPresale') && (
              <div className="presale-section">
                <div className="form-group">
                  <label>Start Time</label>
                  <Controller
                    name={"presale.startTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>End Time</label>
                  <Controller
                    name={"presale.endTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>Total Slots</label>
                  <input
                    type="number"
                    {...register('presale.totalSlots', { valueAsNumber: true })}
                    placeholder="Enter total slots"
                  />
                </div>
                <br />
                <h4>Whitelist Information</h4>
                <div className="form-group">
                  <label>Price</label>
                  <Controller
                    control={control}
                    name={"presale.whitelistInfo.price" as any}
                    render={({ field }) => (
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Enter price"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        className={errors.presale?.whitelistInfo?.price ? 'error' : ''}
                      />
                    )}
                  />
                  {errors.presale?.whitelistInfo?.price && (
                    <span className="error-message">{errors.presale.whitelistInfo.price.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Start Time<span className="required">*</span></label>
                  <Controller
                    name={"presale.whitelistInfo.startTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>End Time</label>
                  <Controller
                    name={"presale.whitelistInfo.endTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>Total NFTs<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('presale.whitelistInfo.totalNFTs', { valueAsNumber: true })}
                    placeholder="Enter total NFTs"
                  />
                  {errors.presale?.whitelistInfo?.price && (
                    <span className="error-message">{errors.presale?.whitelistInfo?.price.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Max NFTs Per Wallet<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('presale.whitelistInfo.maxNFTsPerWallet', { valueAsNumber: true })}
                    placeholder="Enter max NFTs per wallet"
                  />
                  {errors.presale?.whitelistInfo?.maxNFTsPerWallet && (
                    <span className="error-message">{errors.presale?.whitelistInfo?.maxNFTsPerWallet.message}</span>
                  )}
                </div>
              </div>
            )}

            <div className="form-group checkbox-group checkbox-group-public-sale">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('hasPublicSale')}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Public Sales</span>
              </label>
            </div>

            {watch('hasPublicSale') && (
              <div className="public-sale-section">
                <div className="form-group">
                  <label>Price<span className="required">*</span></label>
                  <Controller
                    control={control}
                    name={"publicSale.price" as any}
                    render={({ field }) => (
                      <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Enter price"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        className={errors.publicSale?.price ? 'error' : ''}
                      />
                    )}
                  />
                  {errors.publicSale?.price && (
                    <span className="error-message">{errors.publicSale.price.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Start Time<span className="required">*</span></label>
                  <Controller
                    name={"publicSale.startTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>End Time</label>
                  <Controller
                    name={"publicSale.endTime" as any}
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value as any}
                        onChange={(date) => field.onChange(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable
                      />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label>Total NFTs<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('publicSale.totalNFTs', { valueAsNumber: true })}
                    placeholder="Enter total NFTs"
                  />
                  {errors.publicSale?.totalNFTs && (
                    <span className="error-message">{errors.publicSale?.totalNFTs.message}</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Max NFTs Per Wallet<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('publicSale.maxNFTsPerWallet', { valueAsNumber: true })}
                    placeholder="Enter max NFTs per wallet"
                  />
                  {errors.publicSale?.maxNFTsPerWallet && (
                    <span className="error-message">{errors.publicSale?.maxNFTsPerWallet.message}</span>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {currentStep === 4 && (
          <>
            <h2 className="section-title">Create Collection</h2>
            <p className="section-description">
              Before publishing and loading up the contract with all your items, the
              collection needs to be created on chain. It may take a few seconds to
              complete after you sign the transaction.
            </p>
          </>
        )}

        {currentStep === 5 && (
          <>
            <h2 className="section-title">Publish Items</h2>
            <p className="section-description">
              After you sign the transaction to publish, we will upload the items
              metadata to the smart contract, so it's ready to be minted.
            </p>
            <div className="button-group step-5-buttons">
              <SecondaryButton onClick={async () => {
                setCurrentStep(currentStep - 1);
              }} type="button" variant='gray'>
                Back
              </SecondaryButton>
              <PrimaryButton type="submit" className="publish-button">
                Publish Items and Finish
              </PrimaryButton>
            </div>
          </>
        )}

        {currentStep !== 5 && (
          <div className='button-group'>
            {currentStep !== 1 && <SecondaryButton onClick={async () => {
              setCurrentStep(currentStep - 1);
            }} type="button" variant='gray'>Back</SecondaryButton>}
            {currentStep < TOTAL_STEPS && <PrimaryButton onClick={async () => {
              const isValid = await trigger(FieldsNameByStep[currentStep]);
              if (isValid) {
                setCurrentStep(currentStep + 1);
              }

            }} type="button" className="next-button">Next</PrimaryButton>}
            {currentStep === TOTAL_STEPS && <PrimaryButton isPending={isPending} type="submit" className="next-button">Create Collection</PrimaryButton>}
          </div>
        )}
      </form>
    </div >
  );
};

export default NFTMintingForm;