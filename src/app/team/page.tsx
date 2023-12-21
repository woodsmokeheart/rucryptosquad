import dynamic from "next/dynamic";
import Link from "next/link";

function Team() {
  return (
    <main>
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Team), {
  ssr: false,
});
