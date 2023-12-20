"use client";
import React, { useState, useEffect } from "react";

import HomePageComponent from "@/components/home/HomePageComponents/HomePageComponent";
import Loader from "@/components/Loader/Loader";

export default function Home() {
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
  return isLoading ? <Loader /> : <HomePageComponent />;
}
