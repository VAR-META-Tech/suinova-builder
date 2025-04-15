// NFT Minting Form Component
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/wab/client/components/custom-components/NFTMintingForm/NFTMintingForm.scss';
import { PrimaryButton } from '@/wab/client/components/custom-components/PrimaryButton/PrimaryButton';
import { SecondaryButton } from '@/wab/client/components/custom-components/SecondaryButton/SecondaryButton';
import { get } from 'lodash';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { notification } from 'antd';
import { NOTIFICATION_MESSAGE } from '@/wab/client/constant/mesage.constant';

// Define the schema for form validation using zod
const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  royalty: z.number()
    .min(0, { message: 'Royalty must be at least 0%' })
    .max(100, { message: 'Royalty cannot exceed 100%' }),
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
      price: z.number().min(0),
      startTime: z.date(),
      endTime: z.date().nullable(),
      totalNFTs: z.number().min(0),
      maxNFTsPerWallet: z.number().min(0),
    }),
  }),
  hasPublicSale: z.boolean(),
  publicSale: z.object({
    price: z.number().min(0),
    startTime: z.date(),
    endTime: z.date().nullable(),
    totalNFTs: z.number().min(0),
    maxNFTsPerWallet: z.number().min(0),
  }),
});

// Typescript type inference from zod schema
type FormData = z.infer<typeof formSchema>;

const FieldsNameByStep = {
  1: ['name', 'description', 'royalty', 'milestones', 'teamMembers'],
  2: ['itemImage', 'itemName', 'itemDescription', 'attributes'],
  3: ['hasPresale', 'presale', 'hasPublicSale', 'publicSale'],
}


const NFTMintingForm: React.FC = ({ onCreateCollectionSuccess }: {
  onCreateCollectionSuccess: () => void;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const TOTAL_STEPS = 4;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      royalty: null,
      teamMembers: [],
      milestones: [],
      hasPresale: false,
      presale: {
        startTime: new Date(),
        endTime: null,
        totalSlots: 0,
        whitelistInfo: {
          price: 0,
          startTime: new Date(),
          endTime: null,
          totalNFTs: 0,
          maxNFTsPerWallet: 0,
        },
      },
      hasPublicSale: false,
      publicSale: {
        price: 0,
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
        onCreateCollectionSuccess();
        notification.success({
          message: NOTIFICATION_MESSAGE.CREATE_COLLECTION.MESSAGE,
          description: NOTIFICATION_MESSAGE.CREATE_COLLECTION.DESCRIPTION,
        });
      },
    });

  const data = watch();
  console.log("🚀 ~ data:", data)

  // Field arrays for dynamic fields
  const {
    fields: milestoneFields,
    append: appendMilestone,
    remove: removeMilestone,
  } = useFieldArray({
    control,
    name: 'milestones',
  });

  const {
    fields: teamMemberFields,
    append: appendTeamMember,
    remove: removeTeamMember,
  } = useFieldArray({
    control,
    name: 'teamMembers',
  });

  const {
    fields: attributeFields,
    append: appendAttribute,
    remove: removeAttribute,
  } = useFieldArray({
    control,
    name: 'attributes',
  });

  const onSubmit = (data: FormData) => {
    // Ensure default values for Pre-sales and Public sales if not selected
    if (!data.hasPresale) {
      data.presale = {
        startTime: new Date(),
        endTime: null,
        totalSlots: 0,
        whitelistInfo: {
          price: 0,
          startTime: new Date(),
          endTime: null,
          totalNFTs: 0,
          maxNFTsPerWallet: 0,
        },
      };
    }
    if (!data.publicSale) {
      data.publicSale = {
        price: 0,
        startTime: new Date(),
        endTime: null,
        totalNFTs: 0,
        maxNFTsPerWallet: 0,
      };
    }
    console.log('Form submitted:', data);

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      console.log('Final form data:', data);
    }
  };

  const handleFileChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file uploads - in a real app, you'd store this
    console.log('File selected for team member', index, e.target.files?.[0]);
  };

  return (
    <div className="nft-minting-container">

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
                    type="number"
                    id="royalty"
                    placeholder="Enter collection royalty fees"
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    className={errors.royalty ? 'error' : ''}
                  />
                )}
              />
              <span className="input-suffix">%</span>
            </div>
            {errors.royalty && <span className="error-message">{errors.royalty.message}</span>}
          </div>

          <div className="form-group">
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
                    <i className="trash-icon">🗑</i>
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
          </div>

          <div className="form-group">
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
                    <i className="trash-icon">🗑</i>
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
          </div>
        </>}

        {currentStep === 2 && (
          <>
            <h2 className="section-title">Item Information</h2>
            <p className="section-description">Please fill out the item information below</p>

            <div className="form-group">
              <label htmlFor="itemImage">
                Image<span className="required">*</span>
              </label>
              <input
                id="itemImage"
                type="file"
                accept="image/*"
                {...register('itemImage')}
                className={errors.itemImage ? 'error' : ''}
              />
              {errors.itemImage && <span className="error-message">{errors.itemImage?.message || ""}</span>}
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
              <label>Attributes</label>
              <div className="attributes">
                {attributeFields.map((field, index) => (
                  <div key={field.id} className="attribute-row">
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
                      <i className="trash-icon">🗑</i>
                    </button>
                  </div>
                ))}
                <SecondaryButton
                  type="button"
                  className="add-button"
                  onClick={() => appendAttribute({ type: '', value: '' })}
                >
                  + Add Attribute
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
                    name="presale.startTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    name="presale.endTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    {...register('presale.totalSlots')}
                    placeholder="Enter total slots"
                  />
                </div>
                <br />
                <h4>Whitelist Information</h4>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    {...register('presale.whitelistInfo.price')}
                    placeholder="Enter price"
                  />
                </div>
                <div className="form-group">
                  <label>Start Time<span className="required">*</span></label>
                  <Controller
                    name="presale.whitelistInfo.startTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    name="presale.whitelistInfo.endTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    {...register('presale.whitelistInfo.totalNFTs')}
                    placeholder="Enter total NFTs"
                  />
                </div>
                <div className="form-group">
                  <label>Max NFTs Per Wallet<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('presale.whitelistInfo.maxNFTsPerWallet')}
                    placeholder="Enter max NFTs per wallet"
                  />
                </div>
              </div>
            )}

            <div className="form-group checkbox-group checkbox-group-public-sale">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register('publicSale')}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Public Sales</span>
              </label>
            </div>

            {watch('publicSale') && (
              <div className="public-sale-section">
                <div className="form-group">
                  <label>Price<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('publicSale.price')}
                    placeholder="Enter price"
                  />
                </div>
                <div className="form-group">
                  <label>Start Time<span className="required">*</span></label>
                  <Controller
                    name="publicSale.startTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    name="publicSale.endTime"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        wrapperClassName='full-width'
                        selected={field.value}
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
                    {...register('publicSale.totalNFTs')}
                    placeholder="Enter total NFTs"
                  />
                </div>
                <div className="form-group">
                  <label>Max NFTs Per Wallet<span className="required">*</span></label>
                  <input
                    type="number"
                    {...register('publicSale.maxNFTsPerWallet')}
                    placeholder="Enter max NFTs per wallet"
                  />
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

        <div className='button-group'>
          {currentStep !== 1 && <SecondaryButton onClick={async () => {
            setCurrentStep(currentStep - 1);
          }} type="button" variant='gray'>Back</SecondaryButton>}
          {currentStep < TOTAL_STEPS && <PrimaryButton onClick={async () => {
            // const isValid = await trigger(FieldsNameByStep[currentStep]);
            // if (isValid) {
            // }
            setCurrentStep(currentStep + 1);

          }} type="button" className="next-button">Next</PrimaryButton>}
          {currentStep === TOTAL_STEPS && <PrimaryButton onClick={async () => {
            const isValid = await trigger();
            if (isValid) {
              // TODO: Submit here
            }

          }} type="submit" className="next-button">Create Collection</PrimaryButton>}
        </div>
      </form>
    </div >
  );
};

export default NFTMintingForm;