import Cursor from "@/components/elements/Cursor/Cursor";
import dynamic from "next/dynamic";
import Link from "next/link";

function AboutUs() {
  return (
    <main>
      <Cursor />
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(AboutUs), {
  ssr: false,
});
