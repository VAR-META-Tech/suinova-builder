import React from "react";

import styles from "@/wab/client/components/custom-components/PrimaryButton/PrimaryButton.module.scss"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPending?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isPending = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.importButton} ${isPending ? styles.loading : ""
        } ${className}`}
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
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
}