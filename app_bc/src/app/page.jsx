import { Button } from "@/components/Button";
import FrontScroller from "@/components/FrontScroller";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Link href="/admin">
        <Button>admin</Button>
      </Link>
      <Link href="/user">
        <Button>user</Button>
      </Link>
      <Link href={`document/?id=${789}`}>
        <Button>document</Button>
      </Link> */}
      <FrontScroller />
    </main>
  );
}
