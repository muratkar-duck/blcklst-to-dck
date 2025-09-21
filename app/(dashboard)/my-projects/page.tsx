import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTAButton } from '@/components/cta-button';
import { EmptyState } from '@/components/empty-state';
import { PageHeader } from '@/components/page-header';
import { projectTableData } from '@/lib/mock';

export default function MyProjectsPage() {
  const projects = projectTableData;
  const hasProjects = projects.length > 0;

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'My Projects' }]}
      />
      <PageHeader
        title="MY PROJECTS"
        description="Manage hosted and listed titles, track evaluation volume, and take quick actions."
        actions={<CTAButton href="/add-project" label="Add project" />}
      />
      {!hasProjects ? (
        <EmptyState
          title="You currently do not have any hosted projects."
          description="Click the button below to add your first project and unlock hosting, evaluations, and discovery tools tailored to writers."
          action={
            <CTAButton
              href="/add-project"
              label="Add your first project"
              size="lg"
            />
          }
        />
      ) : (
        <div className="overflow-hidden rounded-3xl border border-brand-primary/10 bg-white shadow-card">
          <div className="grid grid-cols-5 bg-brand-primary/10 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            <span>Title</span>
            <span>Format</span>
            <span>Hosting</span>
            <span>Evaluations</span>
            <span>Actions</span>
          </div>
          <div className="divide-y divide-brand-primary/10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-5 items-center px-6 py-4 text-sm text-brand-primary/80"
              >
                <span className="font-semibold text-brand-primary">
                  {project.title}
                </span>
                <span>{project.format}</span>
                <span>{project.hosting}</span>
                <span>{project.evaluations}</span>
                <div className="flex flex-wrap gap-2">
                  <CTAButton
                    href="/add-project"
                    label="Edit"
                    variant="outline"
                    size="sm"
                  />
                  <CTAButton
                    href="/buy-evaluations"
                    label="Buy evals"
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
