import React from "react";
import useResize from "@/hooks/useResize";
import GalleryPageDesktop from "@/components/gallery/ResponsiveScreens/GalleryPageDesktop";
import GalleryPageMobile from "@/components/gallery/ResponsiveScreens/GalleryPageMobile";

const GalleryPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <GalleryPageDesktop /> : <GalleryPageMobile />;
};

export default GalleryPageSetting;
