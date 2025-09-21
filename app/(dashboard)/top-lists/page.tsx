import { Breadcrumbs } from '@/components/breadcrumbs';
import { PageHeader } from '@/components/page-header';
import { CheckboxFilter } from '@/components/filters/CheckboxFilter';
import { DropdownFilter } from '@/components/filters/DropdownFilter';
import { ProjectCard } from '@/components/cards/ProjectCard';
import {
  attachments,
  availableFormats,
  dateRanges,
  genresAndTags,
  topLists,
} from '@/lib/mock';

export default function TopListsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Top Lists' }]}
      />
      <PageHeader
        title="TOP LISTS"
        description="271 projects have been highlighted this season. Filter by availability, format, and tags to discover your next favorite read."
      />
      <section aria-labelledby="top-list-filters" className="space-y-6">
        <h2
          id="top-list-filters"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60"
        >
          Filters
        </h2>
        <div className="grid gap-4 lg:grid-cols-4">
          <CheckboxFilter
            id="available-download"
            label="Available for Download"
          />
          <DropdownFilter
            id="format"
            label="Format"
            options={availableFormats}
          />
          <DropdownFilter
            id="genres"
            label="Genres & Tags"
            options={genresAndTags}
          />
          <DropdownFilter
            id="attachments"
            label="Attachments"
            options={attachments}
          />
          <DropdownFilter
            id="date-range"
            label="Date Range"
            options={dateRanges}
          />
        </div>
      </section>
      <section aria-labelledby="top-list-results" className="space-y-6">
        <h2
          id="top-list-results"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60"
        >
          Results
        </h2>
        <div className="grid gap-6">
          {topLists.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              logline={project.logline}
              ratings={project.ratings}
              liked={project.liked}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
