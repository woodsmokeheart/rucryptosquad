import LorePageDesktop from "@/components/lore/ResponsiveScreens/LorePageDesktop";
import LorePageMobile from "@/components/lore/ResponsiveScreens/LorePageMobile";
import useResize from "@/hooks/useResize";
import React from "react";

const LorePageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <LorePageDesktop /> : <LorePageMobile />;
};

export default LorePageSetting;
