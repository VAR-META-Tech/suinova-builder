"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import styles from "@/wab/client/components/sidebar/atom/CollectionForm.module.css";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
  useCurrentWallet,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { CONTRACT_PACKAGE_ID } from "@/wab/shared/devflags";
import { useMutation } from "@tanstack/react-query";
import { AppCtx } from "@/wab/client/app-ctx";
import { notification } from "antd";

// Define the form data type
type FormData = {
  collectionId: { value: string; label: string } | null;
  royalty: string;
  publisher: string;
};

// Define the option type for react-select
type Option = {
  value: string;
  label: string;
};

export default function CollectionForm({
  onCancel,
  appCtx,
  projectId,
  onImportSuccess,
}: {
  onCancel: () => void;
  onImportSuccess: () => void;
  appCtx: AppCtx;
  projectId: string;
}) {
  // State for collection type options
  const [collectionOptions, setCollectionOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentWalletAccount = useCurrentAccount();

  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const { mutateAsync: importCollection } = useMutation({
    mutationFn: (data: any) =>
      appCtx.api.importCollection(projectId, { ...data }),
    onSuccess() {
      reset();
      onImportSuccess();
      notification.success({
        message: "Collection imported successfully",
      });
    },
    onError() {
      notification.error({
        message: "Failed to import collection",
      });
    },
  });
  // const tplMgr = React.useMemo(() => studioCtx.tplMgr(), []);
  const suiClient = useSuiClient();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      collectionId: null,
      royalty: "",
      publisher: "",
    },
  });

  // Fetch collection types from API
  useEffect(() => {
    const fetchCollectionTypes = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/collection-types");
        const data = await response.json();

        // Transform the data to match react-select format
        const options = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));

        setCollectionOptions(options);
      } catch (error) {
        console.error("Failed to fetch collection types:", error);
        // Fallback options in case API fails
        setCollectionOptions([
          {
            value:
              "0x847d5967dccc496ef9f5dc3673f1e7d174743fbd9d9e29e8c54c33eb74d912d5",
            label:
              "0x847d5967dccc496ef9f5dc3673f1e7d174743fbd9d9e29e8c54c33eb74d912d5",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchCollectionTypes();
  }, []);

  // const updateImportedCollections = () => {
  //   const { collectionId } = getValues();

  //   if (!collectionId) {
  //     return;
  //   }

  //   const nodes: Descendant[] = [
  //     {
  //       children: [{ text: collectionId.value }],
  //       type: "paragraph",
  //     },
  //   ];
  //   const expr = resolveTemplatedString(nodes);

  //   const arg = tpl.vsettings[0].args.find((_arg) => _arg.param === param);
  //   const curExpr = maybe(arg, (x) => x.expr) || param.defaultExpr || undefined;
  //   const exprLit = curExpr ? tryExtractJson(curExpr) ?? curExpr : undefined;

  //   if (!!exprLit) {
  //     return;
  //   }

  //   if (expr == null && exprLit == null) {
  //     return;
  //   }
  //   const newExpr = isKnownExpr(expr) ? expr : codeLit(expr);
  //   void studioCtx.change(({ success }) => {
  //     tplMgr.setArg(tpl, tpl.vsettings[0], param.variable, newExpr);
  //     return success();
  //   });
  // };

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    if (!currentWalletAccount || !data.collectionId || !data.royalty) {
      return;
    }

    const collectionObject = await suiClient.getObject({
      id: data?.collectionId?.value || "",
      options: {
        showType: true,
        showOwner: true,
        showContent: true,
      },
    });
    console.log("🚀 ~ onSubmit ~ collectionObject:", collectionObject);

    if (!collectionObject?.data?.type) {
      return;
    }

    // const publisher = (
    //   await suiClient.getOwnedObjects({
    //     owner:
    //       "0x7c484896d088f2eb3012cac48de62fd4ec02c54540cbb1cd5e312e02216d055a",
    //   })
    // )?.data.find(
    //   (item) =>
    //     item.data?.type === "0x2::package::Publisher" &&
    //     (item.data?.content as any)?.fields?.module_name === "collection" &&
    //     (item.data?.content as any)?.fields?.package === "collection"
    // );

    console.log("Form submitted:", data);
    const tx = new Transaction();

    const txResult = tx.moveCall({
      target: `${CONTRACT_PACKAGE_ID}::marketplace::import_collection`,
      arguments: [
        tx.object(data?.collectionId?.value || ""),
        tx.object(
          "0x486ae873bc05746f6ab4565938aafd77835e5b411a90c1d143097e0875cda8e1"
        ),
        tx.object(data.royalty),
      ],
      typeArguments: [collectionObject.data?.type],
    });
    console.log("🚀 ~ onSubmit ~ txResult:", txResult);

    // Process the form data here
    await signAndExecuteTransaction(
      {
        transaction: tx,
        chain: "sui:testnet",
      },
      {
        onSuccess: () => {
          void importCollection({
            // Current there wasn't a way to get the packageId, so I hard coded it
            packageId:
              "88b9d9095effb250679a66f736a7e69fb2f71e9514d22a979a0fcda453ea9c3",
            collectionId: collectionObject.data?.objectId || "",
            name: (collectionObject.data?.content as any)?.fields?.name,
            creatorAddress: currentWalletAccount?.address || "",
            collectionType: (collectionObject.data?.content as any)?.type,
            royaltyFee: Number(data.royalty),
          });
        },
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.collectionForm}>
        <div className={styles.formGroup}>
          <label htmlFor="royalty">Wallet Address</label>
          <div className={styles.royaltyInputWrapper}>
            <input
              value={currentWalletAccount?.address}
              id="wallet-address"
              type="text"
              readOnly
              className={styles.royaltyInput}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="collectionType">Collection Type</label>
          <Controller
            name="collectionId"
            control={control}
            rules={{ required: "Collection type is required" }}
            render={({ field }) => (
              <CreatableSelect
                {...field}
                inputId="collectionType"
                options={collectionOptions}
                isLoading={isLoading}
                className={styles.collectionTypeSelect}
                classNamePrefix="select"
                placeholder="Enter collection type"
                isClearable
                isSearchable
                formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
                onCreateOption={(inputValue) => {
                  const newOption = {
                    value: inputValue.toLowerCase(),
                    label: inputValue,
                  };
                  setCollectionOptions([...collectionOptions, newOption]);
                  field.onChange(newOption);
                }}
              />
            )}
          />
          {errors.collectionId && (
            <span className={styles.errorMessage}>
              {errors.collectionId.message as string}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="royalty">Royalty</label>
          <div className={styles.royaltyInputWrapper}>
            <Controller
              name="royalty"
              control={control}
              rules={{
                required: "Royalty is required",
                pattern: {
                  value: /^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/,
                  message: "Please enter a valid percentage (0-100)",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value as string}
                  id="royalty"
                  type="text"
                  placeholder="Enter the royalty"
                  className={styles.royaltyInput}
                />
              )}
            />
            <span className={styles.percentageSymbol}>%</span>
          </div>
          {errors.royalty && (
            <span className={styles.errorMessage}>
              {errors.royalty.message as string}
            </span>
          )}
        </div>

        {/* <div className={styles.formGroup}>
          <label htmlFor="royalty">Publisher</label>
          <div className={styles.royaltyInputWrapper}>
            <Controller
              name="publisher"
              control={control}
              rules={{
                required: "Publisher is required",
              }}
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value as string}
                  id="royalty"
                  type="text"
                  placeholder="Enter the publisher"
                  className={styles.royaltyInput}
                />
              )}
            />
          </div>
          {errors.publisher && (
            <span className={styles.errorMessage}>
              {errors.publisher.message as string}
            </span>
          )}
        </div> */}
        <div className={styles.buttonGroup}>
          <button
            onClick={() => {
              onCancel();
              reset();
            }}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" className={styles.importButton}>
            Import
          </button>
        </div>
      </form>
    </>
  );
}
