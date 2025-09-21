import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTAButton } from '@/components/cta-button';
import { EmptyState } from '@/components/empty-state';
import { InlineDuck } from '@/components/inline/InlineDuck';
import { PageHeader } from '@/components/page-header';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Dashboard' }, { label: 'My Projects' }]} />
      <PageHeader
        title="MY PROJECTS"
        description="Track hosted and listed projects, evaluate submissions, and keep your writer portfolio organized."
        actions={<CTAButton href="/add-project" label="Add project" />}
      />
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
        visual={<InlineDuck className="mx-auto h-48 w-full" />}
      />
    </div>
  );
}
