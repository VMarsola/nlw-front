"use client";
import React, { ChangeEvent, FC, useState } from "react";

const MediaPicker: FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files) {
      return;
    }

    const previewUrl = URL.createObjectURL(files[0]);

    setPreview(previewUrl);
  };

  return (
    <>
      <input
        onChange={onFileSelected}
        accept="image/*"
        name="coverUrl"
        type="file"
        id="media"
        className="invisible h-0 w-0"
      />

      {preview && (
        <img
          src={preview}
          alt="image file preview"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  );
};

export default MediaPicker;
