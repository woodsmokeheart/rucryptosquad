"use client";
import AboutUsPageSetting from "@/pages/AboutUsPageSetting";
import dynamic from "next/dynamic";

function AboutUs() {
  return (
    <main>
      <AboutUsPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(AboutUs), {
  ssr: false,
});
