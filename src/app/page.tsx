"use client";
import React from "react";

import HomePageSetting from "@/pages/HomePageSetting";
import dynamic from "next/dynamic";

function Home() {
  return <HomePageSetting />;
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
