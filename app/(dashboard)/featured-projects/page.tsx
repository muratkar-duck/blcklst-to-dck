import { Breadcrumbs } from '@/components/breadcrumbs';
import { InlinePoster } from '@/components/inline/InlinePoster';
import { PageHeader } from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { featuredProjects } from '@/lib/mock';

export default function FeaturedProjectsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Featured Projects' },
        ]}
      />
      <PageHeader
        title="FEATURED PROJECTS"
        description="Curated projects chosen by our editorial team. Explore a mix of hosted showcases and spotlighted stories ready for industry review."
      />
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="space-y-4">
            <InlinePoster className="mx-auto h-48 w-32" />
            <CardHeader className="space-y-1">
              <CardTitle>{project.title}</CardTitle>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
                {project.format}
              </span>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <div className="border-t border-brand-primary/10 px-6 py-4 text-sm font-semibold text-brand-primary">
              {project.evaluations} evaluations completed
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
