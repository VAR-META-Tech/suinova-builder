import { useState } from "react";
import { notification } from "antd";

export function useCopy() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        notification.success({
          message: "Copied to clipboard",
        });

        // Reset copied state after 2 seconds
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      notification.error({
        message: "Failed to copy text",
      });
    }
  };

  return { isCopied, copyToClipboard };
}
