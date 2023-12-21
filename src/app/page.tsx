"use client";
import React, { useEffect, useState } from "react";

import HomePageSetting from "@/pages/HomePageSetting";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("visited")
  );

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 4000);
    }
  }, []);

  return <>{isLoading ? <Loader /> : <HomePageSetting />}</>;
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
