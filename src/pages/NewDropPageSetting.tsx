import React from "react";
import useResize from "@/hooks/useResize";
import NewDropPageDesktop from "@/components/new_drop/ResponsiveScreens/NewDropPageDesktop";
import NewDropPageMobile from "@/components/new_drop/ResponsiveScreens/NewDropPageMobile";

const NewDropPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <NewDropPageDesktop /> : <NewDropPageMobile />;
};

export default NewDropPageSetting;
