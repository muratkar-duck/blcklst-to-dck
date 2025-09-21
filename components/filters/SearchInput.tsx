'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({
  placeholder = 'Search projects',
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-primary/40"
        aria-hidden="true"
      />
      <Input className="pl-10" placeholder={placeholder} type="search" />
    </div>
  );
}
