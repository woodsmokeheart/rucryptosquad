"use client";
import TeamPageSetting from "@/pages/TeamPageSetting";
import dynamic from "next/dynamic";

function Team() {
  return (
    <main>
      <TeamPageSetting />
    </main>
  );
}

export default dynamic(() => Promise.resolve(Team), {
  ssr: false,
});
