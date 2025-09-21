import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-background px-6 text-center text-brand-primary">
      <h1 className="text-4xl font-black uppercase tracking-[0.3em]">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-sm text-brand-primary/80">
        The page you are looking for does not exist. Please return to the
        dashboard to continue exploring projects and writers.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Back to dashboard</Link>
      </Button>
    </main>
  );
}
