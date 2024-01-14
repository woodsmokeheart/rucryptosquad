import React from "react";
import GalleryPageDesktop from "@/components/gallery/ResponsiveScreens/GalleryPageDesktop";
import GalleryPageMobile from "@/components/gallery/ResponsiveScreens/GalleryPageMobile";
import useResize from "@/hooks/useResize";

const GalleryPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <GalleryPageDesktop /> : <GalleryPageMobile />;
};

export default GalleryPageSetting;
