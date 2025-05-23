import { uploadFile } from "@/utils/upload-file";
import { useState } from "react";

export function useSingleUploader() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File): Promise<string | null> => {
    setUploading(true);
    setError(null);

    try {
      const url = await uploadFile(file);
      return url;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Upload failed.");
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, error };
}
