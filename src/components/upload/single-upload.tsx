"use client";

import { useState } from "react";
import Image from "next/image";
import { useSingleUploader } from "@/hooks/form/use-single-upload";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type SingleUploadFormProps = {
  onComplete?: (url: string) => void;
};

export function SingleUploadForm({ onComplete }: SingleUploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const { upload, uploading, error } = useSingleUploader();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const url = await upload(file);

    if (url) {
      setUploadedUrl(url);
      onComplete?.(url);
    }
  };

  return (
    <div className="space-y-4">
      <Input type="file" accept="image/*" onChange={handleChange} />

      {preview && (
        <Image
          src={preview}
          alt="preview"
          className="w-32 h-32 object-cover rounded"
        />
      )}

      <Button
        onClick={handleUpload}
        disabled={uploading || !file}
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>

      {error && <p className="text-red-600">❌ {error}</p>}

      {uploadedUrl && (
        <div className="mt-2">
          <p className="text-green-700">✅ Uploaded:</p>
          <a
            href={uploadedUrl}
            target="_blank"
            className="text-blue-600 underline"
          >
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
