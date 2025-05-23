import { uploadFile } from "@/utils/upload-file";
import { useState } from "react";

export function useMultiUploader() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    setUploading(true);
    setError(null);

    try {
      const urls = await Promise.all(files.map(uploadFile));
      return urls;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to upload files.");
      return [];
    } finally {
      setUploading(false);
    }
  };

  return { uploadFiles, uploading, error };
}