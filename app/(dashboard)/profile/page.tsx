import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { InlineAvatar } from '@/components/inline/InlineAvatar';
import { PageHeader } from '@/components/page-header';
import { writerLinks } from '@/lib/mock';

export default function ProfilePage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'My Profile' }]}
      />
      <PageHeader
        title="MY PROFILE"
        description="This is how others will see your profile. To update it, please visit the profile settings page."
      />
      <section className="grid gap-8 rounded-3xl border border-brand-primary/10 bg-white p-10 shadow-card lg:grid-cols-[200px,1fr]">
        <InlineAvatar initials="RM" className="mx-auto h-32 w-32" />
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-[0.25em] text-brand-primary">
              Rowan Miles
            </h2>
            <p className="mt-2 text-sm text-brand-primary/80">
              Screenwriter, storyteller, and community builder focused on
              character driven science fiction.
            </p>
          </div>
          <dl className="grid gap-2 text-sm text-brand-primary/80">
            <div className="flex flex-wrap gap-2">
              <dt className="font-semibold uppercase tracking-wide">
                Location:
              </dt>
              <dd>Los Angeles, CA</dd>
            </div>
            <div className="flex flex-wrap gap-2">
              <dt className="font-semibold uppercase tracking-wide">Genres:</dt>
              <dd>Science Fiction, Thriller, Adventure</dd>
            </div>
          </dl>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
              Links
            </h3>
            <ul className="mt-2 grid gap-2 text-sm">
              {writerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent"
                  >
                    <span aria-hidden="true">{'->'}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
