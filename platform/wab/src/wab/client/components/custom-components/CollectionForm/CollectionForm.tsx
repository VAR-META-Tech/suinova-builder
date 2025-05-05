"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import styles from "@/wab/client/components/custom-components/CollectionForm/CollectionForm.module.css";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
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
import { useMutation, useQuery } from "@tanstack/react-query";

// Define the form data type
type FormData = {
  collectionId: { value: string; label: string } | null;
  royalty: number | null;
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
  const [collectionOptions, setCollectionOptions] = useState<Option[]>([]);
  // State for collection type options
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
  const { data: collections, isLoading } = useQuery({
    queryKey: ["my-collections", currentWalletAccount?.address],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.MARKETPLACE_API_URL}collection-metadata/creator/${currentWalletAccount?.address}`
      );
      return (await res.json()).data;
    },
  });
  const { mutateAsync: generateSignature, isPending: isGeneratingSignature } =
    useMutation<
      { signature: string; publicKey: string },
      Error,
      { collectionType: string; royaltyFee: number },
      {}
    >({
      mutationFn: async (params) => {
        const res = await fetch(
          `${process.env.MARKETPLACE_API_URL}collection/import/signature`,
          {
            method: "POST",
            body: JSON.stringify({
              project_id: projectId,
              collection_type: params.collectionType,
              royalty_fee: params.royaltyFee,
            }),
          }
        );
        return res.json();
      },
    });

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
      royalty: importedCollection?.royaltyFee || null,
      publisher: "",
    },
  });

  useEffect(() => {
    setCollectionOptions(
      collections?.map((collection) => ({
        value: collection.type,
        label: collection.type,
      })) || []
    );
  }, [collections]);

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

    // const signature = await generateSignature({
    //   collectionType: data.collectionId.value,
    //   royaltyFee: data.royalty,
    // })

    notification.info({
      message: NOTIFICATION_MESSAGE.IMPORT_COLLECTION.WAITING,
    });

    const tx = new Transaction();

    tx.moveCall({
      target: `${ENV.CONTRACT_PACKAGE_ID}::${MARKETPLACE_MODULE}::${CONTRACT_METHOD.IMPORT_COLLECTION}`,
      arguments: [
        tx.object(ENV.MARKETPLACE_CAP_ID),
        tx.pure.vector("u8", [1, 2, 3]),
        tx.pure.string(projectId),
        tx.object(data.royalty.toString()),
      ],
      typeArguments: [data.collectionId.value],
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
            {isGeneratingSignature ||
              (isPending && (
                <svg
                  className={styles.spinner}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                ></svg>
              ))}
            <span className={styles.buttonText}>Import</span>
          </button>
        </div>
      </form>
    </>
  );
}
