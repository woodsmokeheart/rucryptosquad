import dynamic from "next/dynamic";
import Link from "next/link";

function Contacts() {
  return (
    <main>
      <Link href="/">Home</Link>
    </main>
  );
}

export default dynamic(() => Promise.resolve(Contacts), {
  ssr: false,
});
