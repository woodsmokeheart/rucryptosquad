"use client";
import React, { useState, useEffect } from "react";

import HomePageComponent from "@/components/home/HomePageComponents/HomePageComponent";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return isLoading ? <Loader /> : <HomePageComponent />;
}
