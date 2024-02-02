"use client";
import LorePageSetting from "@/pages/LorePageSetting";
import dynamic from "next/dynamic";

function Lore() {
  return (
    <main>
      <LorePageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Lore), {
  ssr: false,
});
