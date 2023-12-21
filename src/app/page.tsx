"use client";
import React, { useEffect, useState } from "react";

import HomePageSetting from "@/pages/HomePageSetting";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader/Loader";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{isLoading ? <Loader /> : <HomePageSetting />}</>;
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
