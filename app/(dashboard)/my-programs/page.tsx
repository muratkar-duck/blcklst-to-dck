import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProgramCard } from '@/components/cards/ProgramCard';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { closedPrograms, openPrograms } from '@/lib/mock';

export default function MyProgramsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'My Programs' }]}
      />
      <PageHeader
        title="MY PROGRAMS"
        description="Manage open submissions, fellowship opportunities, and closed programs from one hub."
      />
      <Tabs defaultValue="open" className="w-full">
        <TabsList>
          <TabsTrigger value="open">Open Programs</TabsTrigger>
          <TabsTrigger value="closed">Closed Programs</TabsTrigger>
        </TabsList>
        <TabsContent value="open">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {openPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="closed">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {closedPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
