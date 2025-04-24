import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/auth/sign-up/artisan">Sign Up as Artisan</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/auth/sign-up/client">Sign Up as Client</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/auth/sign-up/client">Login</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
