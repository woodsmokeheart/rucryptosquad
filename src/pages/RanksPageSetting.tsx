import RanksPageDesktop from "@/components/ranks/ResponsiveScreens/RanksPageDesktop";
import RanksPageMobile from "@/components/ranks/ResponsiveScreens/RanksPageMobile";
import useResize from "@/hooks/useResize";
import React from "react";

const RanksPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <RanksPageDesktop /> : <RanksPageMobile />;
};

export default RanksPageSetting;
