"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import styles from "@/wab/client/components/custom-components/CollectionForm/CollectionForm.module.css";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { ENV } from "@/wab/shared/devflags";
import { AppCtx } from "@/wab/client/app-ctx";
import {
  CHAIN,
  CONTRACT_METHOD,
  MARKETPLACE_MODULE,
} from "@/wab/client/constant/contract.constant";
import { notification } from "antd";
import { NOTIFICATION_MESSAGE } from "@/wab/client/constant/mesage.constant";
import { NFTCollectionResponse } from "@/wab/shared/ApiSchema";

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
  projectId,
  onImportSuccess,
  importedCollection,
}: {
  onCancel: () => void;
  onImportSuccess: () => void;
  appCtx: AppCtx;
  projectId: string;
  importedCollection: NFTCollectionResponse | null;
}) {
  // State for collection type options
  const [collectionOptions, setCollectionOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentWalletAccount = useCurrentAccount();

  const { mutateAsync: signAndExecuteTransaction, isPending } =
    useSignAndExecuteTransaction({
      onSuccess: () => {
        onImportSuccess();
        notification.success({
          message: NOTIFICATION_MESSAGE.IMPORT_COLLECTION.MESSAGE,
          description: NOTIFICATION_MESSAGE.IMPORT_COLLECTION.DESCRIPTION,
        });
      },
    });

  const suiClient = useSuiClient();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      collectionId: importedCollection
        ? {
            value: importedCollection?.collectionId,
            label: importedCollection.collectionId,
          }
        : null,
      royalty: importedCollection?.royaltyFee?.toString() || "",
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
              "0x041bd45b2c666e65caa228963c7986e10e622b27f28a187bc348452b9fc51a51",
            label:
              "0x041bd45b2c666e65caa228963c7986e10e622b27f28a187bc348452b9fc51a51",
          },
          {
            value:
              "0x0718a9ff79bd8dad7ef4f073857d2a4403206598f00804273b757b8b62d566af",
            label:
              "0x0718a9ff79bd8dad7ef4f073857d2a4403206598f00804273b757b8b62d566af",
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

    if (!collectionObject?.data?.type) {
      return;
    }

    notification.info({
      message: NOTIFICATION_MESSAGE.IMPORT_COLLECTION.WAITING,
    });

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

    const tx = new Transaction();

    // Can not find how to get the publisher yet so I hardcoded it
    const HARDCODED_PUBLISHER =
      "0x486ae873bc05746f6ab4565938aafd77835e5b411a90c1d143097e0875cda8e1";

    tx.moveCall({
      target: `${ENV.CONTRACT_PACKAGE_ID}::${MARKETPLACE_MODULE}::${CONTRACT_METHOD.IMPORT_COLLECTION}`,
      arguments: [
        tx.object(ENV.MARKETPLACE_CAP_ID),
        tx.object(HARDCODED_PUBLISHER),
        tx.pure.string(projectId),
        tx.object(data.royalty),
      ],
      typeArguments: [collectionObject.data?.type],
    });

    // Process the form data here
    await signAndExecuteTransaction({
      transaction: tx,
      chain: CHAIN,
    });
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
          <button
            type="submit"
            className={`${styles.importButton} ${
              isPending ? styles.loading : ""
            }`}
            disabled={isPending}
          >
            {isPending && (
              <svg
                className={styles.spinner}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              ></svg>
            )}
            <span className={styles.buttonText}>Import</span>
          </button>
        </div>
      </form>
    </>
  );
}
