"use client";
import dynamic from "next/dynamic";

function NewDrop() {
  return <main>NewDrop</main>;
}

export default dynamic(() => Promise.resolve(NewDrop), {
  ssr: false,
});
