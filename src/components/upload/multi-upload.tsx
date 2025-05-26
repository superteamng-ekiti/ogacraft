"use client";

import { useMultiUploader } from "@/hooks/form/use-multi-uploader";
import Image from "next/image";
import React, { useRef, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { UploadIcon, X } from "lucide-react";

type MultiUploadFormProps = {
  onComplete?: (urls: string[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
  title?: string;
  uploadRef?: React.MutableRefObject<(() => Promise<string[]>) | null>;
};

export function MultiUploadForm({
  onComplete,
  maxFiles = 4,
  maxSizeMB = 20,
  title = "Images",
  uploadRef,
}: MultiUploadFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false); // Used to track upload state
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadFiles } = useMultiUploader();

  // Handle file selection
  const handleFileSelection = useCallback(
    (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;

      // Convert FileList to array and filter
      const newFiles = Array.from(selectedFiles).filter((file) => {
        // Check file type
        if (!file.type.startsWith("image/")) {
          setError("Only image files are allowed");
          return false;
        }

        // Check file size (convert maxSizeMB to bytes)
        if (file.size > maxSizeMB * 1024 * 1024) {
          setError(`File size exceeds ${maxSizeMB}MB limit`);
          return false;
        }

        return true;
      });

      // Check if adding these files would exceed the max count
      if (files.length + newFiles.length > maxFiles) {
        setError(`You can only upload up to ${maxFiles} images`);
        return;
      }

      // Add new files and create previews
      setFiles((prev) => [...prev, ...newFiles]);

      // Create object URLs for previews
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);

      // Clear any previous errors
      setError(null);
    },
    [files.length, maxFiles, maxSizeMB]
  );

  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelection(e.target.files);
    // Reset the input value so the same file can be selected again if removed
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileSelection(e.dataTransfer.files);
  };

  // Remove a file from the selection
  const removeFile = (index: number) => {
    // Create new arrays without the removed item
    const newFiles = files.filter((_, i) => i !== index);

    // Revoke the object URL to prevent memory leaks
    URL.revokeObjectURL(previews[index]);
    const newPreviews = previews.filter((_, i) => i !== index);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  // Upload all files when form is submitted
  const uploadAllFiles = async (): Promise<string[]> => {
    if (files.length === 0) return [];

    setIsUploading(true);
    setError(null);

    try {
      const urls = await uploadFiles(files);

      if (urls.length > 0) {
        // Clean up all preview URLs
        previews.forEach((url) => URL.revokeObjectURL(url));

        // Clear the component state
        setFiles([]);
        setPreviews([]);

        // Call the onComplete callback with the uploaded URLs
        onComplete?.(urls);

        return urls;
      }
      return [];
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload files");
      return [];
    } finally {
      setIsUploading(false);
    }
  };

  // Trigger file input click
  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  // Expose the uploadAllFiles function via ref
  React.useEffect(() => {
    if (uploadRef) {
      uploadRef.current = uploadAllFiles;
    }
    // We intentionally don't include uploadAllFiles in the dependency array
    // because it would cause an infinite loop due to its definition capturing files
  }, [uploadRef, files]);

  return (
    <div className="space-y-4 w-full">
      <h3 className="font-medium text-sm">
        {title}
        {files.length > 0 && ` (${files.length})`}
      </h3>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleChange}
        accept="image/jpeg,image/png,image/webp,image/jpg"
        className="hidden"
      />

      {/* Drag and drop area */}
      <div
        className={`border border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <Button
          variant="outline"
          type="button"
          className="mb-4"
          disabled={isUploading}
        >
          <UploadIcon className="mr-2 h-4 w-4" />{" "}
          {isUploading ? "Uploading..." : "Upload"}
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          Choose images or drag & drop it here.
          <br />
          JPG, JPEG, PNG and WEBP. Max {maxSizeMB} MB.
        </p>
      </div>

      {/* Preview area */}
      {previews.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {previews.map((src, i) => (
            <div key={i} className="relative group">
              <Image
                src={src}
                alt={`preview-${i}`}
                width={200}
                height={200}
                className="w-full aspect-square object-cover rounded-md"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(i);
                }}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-80 hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: Math.max(0, maxFiles - previews.length) }).map(
            (_, i) => (
              <div
                key={`empty-${i}`}
                className="border border-dashed border-border rounded-md aspect-square flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={openFileDialog}
              >
                <UploadIcon className="h-6 w-6 text-muted-foreground" />
              </div>
            )
          )}
        </div>
      )}

      {/* Error message */}
      {error && <p className="text-sm text-destructive">{error}</p>}

      {/* This component now doesn't handle the actual upload - it's deferred to form submission */}
      {/* The parent component should call uploadAllFiles when the form is submitted */}
      {/* We're making the uploadAllFiles function available to the parent via onComplete */}
    </div>
  );
}
