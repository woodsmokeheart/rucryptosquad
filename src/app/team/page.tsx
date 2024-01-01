"use client";
import Cursor from "@/components/elements/Cursor/Cursor";
import TeamPageSetting from "@/pages/TeamPageSetting";
import dynamic from "next/dynamic";

function Team() {
  return (
    <main>
      <Cursor />
      <TeamPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Team), {
  ssr: false,
});
