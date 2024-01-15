"use client";
import RanksPageSetting from "@/pages/RanksPageSetting";
import dynamic from "next/dynamic";

function Ranks() {
  return (
    <main>
      <RanksPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Ranks), {
  ssr: false,
});
