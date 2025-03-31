"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import styles from "@/wab/client/components/sidebar/atom/CollectionForm.module.css";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { Param, TplComponent } from "@/wab/shared/model/classes";
import { maybe, spawn } from "@/wab/shared/common";
import { StudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { codeLit, tryExtractJson } from "@/wab/shared/core/exprs";

// Define the form data type
type FormData = {
  collectionType: { value: string; label: string } | null;
  royalty: string;
};

// Define the option type for react-select
type Option = {
  value: string;
  label: string;
};

export default function CollectionForm({
  tpl,
  studioCtx,
  param,
}: {
  tpl: TplComponent;
  studioCtx: StudioCtx;
  param: Param;
}) {
  // State for collection type options
  const [collectionOptions, setCollectionOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [digest, setDigest] = useState<string>("");
  const currentWalletAccount = useCurrentAccount();
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction({
    onSuccess: (result) => {
      console.log("🚀 ~ result:", result);
      updateImportedCollections();
    },
  });
  const tplMgr = React.useMemo(() => studioCtx.tplMgr(), []);

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      collectionType: null,
      royalty: "",
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
            value: "0xd2197b1ce2096e...99f1d7::nft::NFT",
            label: "0xd2197b1ce2096e...99f1d7::nft::NFT",
          },
          {
            value: "0x73dbf60e99add5...dd69d8::nft::NFT",
            label: "0x73dbf60e99add5...dd69d8::nft::NFT",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchCollectionTypes();
  }, []);

  const updateImportedCollections = () => {
    const newCollection = "0xd2197b1ce1345e...99f1d7::nft::NFT";

    if (!newCollection) {
      return;
    }

    let expr = [{ packageId: newCollection }];

    const arg = tpl.vsettings[0].args.find((_arg) => _arg.param === param);
    const curExpr = maybe(arg, (x) => x.expr) || param.defaultExpr || undefined;
    const exprLit = curExpr ? tryExtractJson(curExpr) ?? curExpr : undefined;

    if (
      Array.isArray(exprLit) &&
      exprLit.every((item) => typeof item === "object" && item !== null)
    ) {
      if (!exprLit.find((item) => item.packageId === newCollection)) {
        expr = [...exprLit, expr];
      }
    }

    const newExpr = codeLit(expr);

    spawn(
      studioCtx.change(({ success }) => {
        tplMgr.setArg(tpl, tpl.vsettings[0], param.variable, newExpr);
        return success();
      })
    );
  };

  // Handle form submission
  const onSubmit = (data: FormData) => {
    if (!currentWalletAccount) {
      return;
    }

    console.log("Form submitted:", data);
    const tx = new Transaction();

    tx.moveCall({
      target:
        "0x8372201a47f77c209c4d56bfae19fae5c1120cc723eca5670ff42f7f569a4677::example",
      function: "Import_collection",
      arguments: [],
      typeArguments: [],
    });

    // Process the form data here
    signAndExecuteTransaction(
      {
        transaction: tx,
        chain: "sui:devnet",
      },
      {
        onSuccess: (result) => {
          console.log("executed transaction", result);
          setDigest(result.digest);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.collectionForm}>
      <p className={styles.formTitle}>Import collection</p>
      <div className={styles.formGroup}>
        <label htmlFor="collectionType">Collection Type</label>
        <Controller
          name="collectionType"
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
        {errors.collectionType && (
          <span className={styles.errorMessage}>
            {errors.collectionType.message as string}
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

      <button type="submit" className={styles.importButton}>
        Import
      </button>
    </form>
  );
}
