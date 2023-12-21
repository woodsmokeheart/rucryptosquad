import dynamic from "next/dynamic";
import Link from "next/link";

function Ranks() {
  return (
    <main>
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Ranks), {
  ssr: false,
});
