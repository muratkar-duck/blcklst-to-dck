'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopBarProps {
  onToggleSidebar: () => void;
}

export function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-brand-primary/10 bg-brand-background/95 px-6 backdrop-blur">
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onToggleSidebar}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-primary">
          The Blacklist Studio
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm font-medium text-brand-primary/80">
        <span>Rowan Miles</span>
        <div
          className="h-10 w-10 rounded-full border-2 border-brand-primary/20 bg-brand-primary/10"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
