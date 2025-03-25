import { Button } from "@/components/ui/button";
import Link from "next/link"; // Correct import for Next.js Link

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full gap-6 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Inovoicepedia</h1>
      <p>
        <Link href="/dashbord" passHref>
          <Button>Sign In</Button>
        </Link>
      </p>
    </main>
  );
}