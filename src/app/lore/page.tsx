import Cursor from "@/components/elements/Cursor/Cursor";
import dynamic from "next/dynamic";
import Link from "next/link";

function Lore() {
  return (
    <main>
       <Cursor />
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Lore), {
  ssr: false,
});
