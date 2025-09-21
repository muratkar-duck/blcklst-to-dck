'use client';

import { useState } from 'react';
import { toast } from 'sonner';
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

const formatOptions = [
  {
    id: 'film',
    name: 'Film',
    description: 'Feature length or short film scripts ready for production.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <rect
          x="8"
          y="16"
          width="48"
          height="32"
          rx="6"
          fill="#0e5b4a"
          opacity="0.2"
        />
        <rect x="14" y="22" width="36" height="20" rx="4" fill="#0e5b4a" />
        <circle cx="24" cy="32" r="4" fill="#ffaa06" />
        <circle cx="40" cy="32" r="4" fill="#ffaa06" />
      </svg>
    ),
  },
  {
    id: 'tv',
    name: 'TV',
    description: 'Pilots, series bibles, and serialized storytelling.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <rect
          x="10"
          y="12"
          width="44"
          height="36"
          rx="4"
          fill="#0e5b4a"
          opacity="0.2"
        />
        <rect x="16" y="18" width="32" height="20" rx="3" fill="#0e5b4a" />
        <rect x="24" y="42" width="16" height="4" rx="2" fill="#ffaa06" />
      </svg>
    ),
  },
  {
    id: 'play',
    name: 'Play',
    description: 'Theatrical works for stage and experimental venues.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <rect
          x="8"
          y="18"
          width="48"
          height="28"
          rx="6"
          fill="#0e5b4a"
          opacity="0.2"
        />
        <path d="M20 44V20l24 12-24 12z" fill="#ffaa06" />
      </svg>
    ),
  },
  {
    id: 'musical',
    name: 'Musical',
    description: 'Stage and screen musicals with original compositions.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <path
          d="M22 14h6v26a6 6 0 11-6-6V14zm14 0h6v18a6 6 0 11-6-6V14z"
          fill="#0e5b4a"
        />
        <circle cx="22" cy="46" r="6" fill="#ffaa06" />
        <circle cx="42" cy="40" r="6" fill="#ffaa06" />
      </svg>
    ),
  },
  {
    id: 'fiction',
    name: 'Fiction',
    description: 'Novels and prose ready to share with readers.',
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
        <rect
          x="10"
          y="14"
          width="44"
          height="36"
          rx="4"
          fill="#0e5b4a"
          opacity="0.2"
        />
        <path d="M16 20h20v24H16z" fill="#0e5b4a" />
        <path d="M36 20h12v24H36z" fill="#ffaa06" opacity="0.8" />
      </svg>
    ),
  },
];

const hostingOptions = [
  {
    id: 'host',
    name: 'Host ($30/mo)',
    description:
      'Unlock hosting, discoverability tools, and evaluation purchases.',
    accent: true,
  },
  {
    id: 'list',
    name: 'List (free)',
    description: 'Share your logline and metadata while you prepare to host.',
  },
];

export default function AddProjectPage() {
  const [selectedFormat, setSelectedFormat] = useState<string>('film');
  const [selectedHosting, setSelectedHosting] = useState<string>('host');

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Add Project' }]}
      />
      <PageHeader
        title="ADD PROJECT"
        description="Select your format and hosting preference to get started."
        actions={<Button variant="ghost">Need help?</Button>}
      />
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
          Select your format
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {formatOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all ${
                selectedFormat === option.id
                  ? 'border-brand-accent shadow-card ring-2 ring-brand-accent/60'
                  : 'border-brand-primary/15'
              }`}
              role="button"
              tabIndex={0}
              aria-pressed={selectedFormat === option.id}
              onClick={() => setSelectedFormat(option.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedFormat(option.id);
                }
              }}
            >
              <CardHeader className="flex items-center gap-4">
                <div className="rounded-2xl bg-brand-primary/10 p-3">
                  {option.icon}
                </div>
                <CardTitle>{option.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{option.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
          Hosting options
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {hostingOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all ${
                selectedHosting === option.id
                  ? 'border-brand-accent shadow-card ring-2 ring-brand-accent/60'
                  : 'border-brand-primary/15'
              } ${option.accent ? 'bg-brand-primary/5' : ''}`}
              role="button"
              tabIndex={0}
              aria-pressed={selectedHosting === option.id}
              onClick={() => setSelectedHosting(option.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedHosting(option.id);
                }
              }}
            >
              <CardHeader>
                <CardTitle>{option.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{option.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className="flex justify-end">
        <Button
          size="lg"
          onClick={() =>
            toast('Step 2 is not implemented yet.', {
              description: `Format: ${selectedFormat.toUpperCase()} | Hosting: ${selectedHosting.toUpperCase()}`,
            })
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
