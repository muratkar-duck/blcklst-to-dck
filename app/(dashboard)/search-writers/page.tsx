import { Breadcrumbs } from '@/components/breadcrumbs';
import { CheckboxFilter } from '@/components/filters/CheckboxFilter';
import { DropdownFilter } from '@/components/filters/DropdownFilter';
import { SearchInput } from '@/components/filters/SearchInput';
import { InlineAvatar } from '@/components/inline/InlineAvatar';
import { PageHeader } from '@/components/page-header';
import {
  genresAndTags,
  locations,
  searchWriters,
  writerAffiliations,
  writerDetails,
} from '@/lib/mock';

export default function SearchWritersPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Search Writers' }]}
      />
      <PageHeader
        title="SEARCH WRITERS"
        description="Connect with writers open to collaboration, representation, and feedback."
      />
      <section className="space-y-4">
        <SearchInput placeholder="Search by writer name or keyword" />
        <div className="grid gap-4 lg:grid-cols-3">
          <CheckboxFilter id="bl-recommended" label="Black List Recommended" />
          <CheckboxFilter
            id="available-collab"
            label="Available for Collaboration"
          />
          <DropdownFilter
            id="genres"
            label="Genres & Tags"
            options={genresAndTags}
          />
          <DropdownFilter
            id="locations"
            label="Locations"
            options={locations}
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
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
          Matching Writers
        </h2>
        <div className="grid gap-6">
          {searchWriters.map((writer) => (
            <article
              key={writer.id}
              className="grid gap-6 rounded-3xl border border-brand-primary/15 bg-white p-8 shadow-card sm:grid-cols-[120px,1fr]"
            >
              <InlineAvatar
                initials={writer.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
                className="mx-auto h-24 w-24"
              />
              <div className="space-y-3">
                <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-brand-primary">
                  {writer.name}
                </h3>
                <p className="text-sm text-brand-primary/80">{writer.bio}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary/60">
                  {writer.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
