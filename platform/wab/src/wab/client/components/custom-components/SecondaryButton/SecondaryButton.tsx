import React from "react";

import styles from "@/wab/client/components/custom-components/SecondaryButton/SecondaryButton.module.scss";

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPending?: boolean;
  children?: React.ReactNode;
  className?: string;
  prefixIcon?: React.ReactNode;
  variant?: 'default' | 'gray'; // Add new variant
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  isPending = false,
  children,
  className,
  prefixIcon,
  variant = 'default', // Default to 'default' variant
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.outlineButton} ${isPending ? styles.loading : ""} ${variant === 'gray' ? styles.gray : ""
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
      {!isPending && prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};
