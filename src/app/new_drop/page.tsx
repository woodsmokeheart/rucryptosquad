"use client";
import NewDropPageSetting from "@/pages/NewDropPageSetting";
import dynamic from "next/dynamic";

function NewDrop() {
  return (
    <main>
      <NewDropPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(NewDrop), {
  ssr: false,
});
