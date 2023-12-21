import dynamic from "next/dynamic";
import Link from "next/link";

function AboutUs() {
  return (
    <main>
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(AboutUs), {
  ssr: false,
});
