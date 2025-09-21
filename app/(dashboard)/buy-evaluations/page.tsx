import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { evaluationProducts } from '@/lib/mock';

export default function BuyEvaluationsPage() {
  const hasHostedProjects = false;

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Buy Evaluations' },
        ]}
      />
      <PageHeader
        title="BUY EVALUATIONS"
        description="Purchase feedback and scores for your hosted projects."
        actions={
          <Button asChild variant="outline">
            <Link href="/add-project">Host a project</Link>
          </Button>
        }
      />
      {!hasHostedProjects ? (
        <div className="rounded-3xl border border-brand-accent/40 bg-brand-accent/10 p-6 text-sm font-semibold text-brand-primary">
          You need to host a project to buy evaluations.{' '}
          <Link href="/add-project" className="underline">
            Host now
          </Link>
        </div>
      ) : null}
      <section className="grid gap-6 md:grid-cols-3">
        {evaluationProducts.map((product) => (
          <Card key={product.id} className="space-y-4">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.turnaround}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-black text-brand-primary">
                {product.price}
              </div>
              <Button disabled={!hasHostedProjects} className="w-full">
                {hasHostedProjects ? 'Add to cart' : 'Select project first'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
