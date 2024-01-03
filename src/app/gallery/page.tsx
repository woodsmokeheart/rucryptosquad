import dynamic from "next/dynamic";
import Link from "next/link";

function Gallery() {
  return (
    <main>
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Gallery), {
  ssr: false,
});
