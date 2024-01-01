import TeamPageDesktop from "@/components/team/ResponsiveScreens/TeamPageDesktop";
import TeamPageMobile from "@/components/team/ResponsiveScreens/TeamPageMobile";
import useResize from "@/hooks/useResize";
import React from "react";

const TeamPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <TeamPageDesktop /> : <TeamPageMobile />;
};

export default TeamPageSetting;
