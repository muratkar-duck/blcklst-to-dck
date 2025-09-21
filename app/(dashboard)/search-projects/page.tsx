import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { CheckboxFilter } from '@/components/filters/CheckboxFilter';
import { DropdownFilter } from '@/components/filters/DropdownFilter';
import { SearchInput } from '@/components/filters/SearchInput';
import { PageHeader } from '@/components/page-header';
import {
  attachments,
  availableFormats,
  characters,
  dateRanges,
  eras,
  genresAndTags,
  locations,
  searchProjects,
  writerAffiliations,
  writerDetails,
} from '@/lib/mock';

export default function SearchProjectsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Search Projects' },
        ]}
      />
      <PageHeader
        title="SEARCH PROJECTS"
        description="Browse the latest hosted and listed stories. Combine filters to pinpoint exactly what you want to read or evaluate."
      />
      <section className="space-y-4">
        <SearchInput placeholder="Search by title, writer, or logline" />
        <div className="grid gap-4 lg:grid-cols-3">
          <CheckboxFilter
            id="blacklist-recommended"
            label="Black List Recommended"
          />
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
            id="genres-tags"
            label="Genres & Tags"
            options={genresAndTags}
          />
          <DropdownFilter id="eras" label="Eras" options={eras} />
          <DropdownFilter
            id="locations"
            label="Locations"
            options={locations}
          />
          <DropdownFilter
            id="attachments"
            label="Attachments"
            options={attachments}
          />
          <DropdownFilter
            id="characters"
            label="Characters"
            options={characters}
          />
          <DropdownFilter
            id="writer-details"
            label="Writer Details"
            options={writerDetails}
          />
          <DropdownFilter
            id="writer-affiliations"
            label="Writer Affiliations"
            options={writerAffiliations}
          />
          <DropdownFilter
            id="date-range"
            label="Date Range"
            options={dateRanges}
          />
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
          Matching Projects
        </h2>
        <div className="grid gap-6">
          {searchProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              logline={project.logline}
              ratings={project.ratings}
              liked={false}
              format={project.format}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
