"use client";
import dynamic from "next/dynamic";
import GalleryPageSetting from "@/pages/GalleryPageSetting";

function Gallery() {
  return (
    <main>
      <GalleryPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Gallery), {
  ssr: false,
});
