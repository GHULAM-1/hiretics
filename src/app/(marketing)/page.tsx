import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="flex bg-primaryHoverStrong w-screen h-screen justify-center items-center gap-5 ">
        <Button size="lg">
          <Link href="/login">login </Link>
        </Button>
        <Button size="lg">
          <Link href="/register">register </Link>
        </Button>
      </div>
    </>
  );
}
