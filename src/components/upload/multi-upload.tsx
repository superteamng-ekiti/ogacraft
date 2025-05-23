"use client";

import { useMultiUploader } from "@/hooks/form/use-multi-uploader";
import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type MultiUploadFormProps = {
  onComplete?: (urls: string[]) => void;
};

export function MultiUploadForm({ onComplete }: MultiUploadFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const { uploadFiles, uploading, error } = useMultiUploader();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
    setPreviews(selected.map(file => URL.createObjectURL(file)));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    const urls = await uploadFiles(files);

    if (urls.length > 0) {
      setUploadedUrls(urls);
      onComplete?.(urls);
    }
  };

  return (
    <div className="space-y-4">
      <Input type="file" multiple onChange={handleChange} accept="image/*" />

      {previews.length > 0 && (
        <div className="flex gap-4 flex-wrap">
          {previews.map((src, i) => (
            <Image key={i} src={src} alt={`preview-${i}`} className="w-32 h-32 object-cover rounded" />
          ))}
        </div>
      )}

      <Button
        onClick={handleUpload}
        disabled={uploading || files.length === 0}
      >
        {uploading ? "Uploading..." : "Upload All"}
      </Button>

      {error && <p className="text-red-600">❌ {error}</p>}

      {uploadedUrls.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold">✅ Uploaded:</h4>
          {uploadedUrls.map((url, i) => (
            <a key={i} href={url} target="_blank" className="block text-blue-600 underline">
              {url}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
