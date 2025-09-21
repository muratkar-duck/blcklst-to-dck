'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderPlus,
  Search,
  UserCircle,
  Star,
  Trophy,
  PanelsTopLeft,
  ShoppingBag,
  BookOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'My Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'My Projects', href: '/my-projects', icon: PanelsTopLeft },
  { label: 'Add Project', href: '/add-project', icon: FolderPlus },
  { label: 'Search Projects', href: '/search-projects', icon: Search },
  { label: 'Search Writers', href: '/search-writers', icon: UserCircle },
  { label: 'Top Lists', href: '/top-lists', icon: Trophy },
  { label: 'Featured Projects', href: '/featured-projects', icon: Star },
  { label: 'My Programs', href: '/my-programs', icon: BookOpen },
  { label: 'Buy Evaluations', href: '/buy-evaluations', icon: ShoppingBag },
  { label: 'My Profile', href: '/profile', icon: UserCircle },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'pointer-events-none opacity-0'
        )}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-72 transform bg-brand-primary px-6 py-8 text-brand-background shadow-xl transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-background">
            Writer HQ
          </span>
          <button
            type="button"
            className="rounded-full p-2 text-brand-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary lg:hidden"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <nav aria-label="Main navigation" className="mt-10 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-all',
                  isActive
                    ? 'bg-brand-background text-brand-primary shadow-card'
                    : 'text-brand-background/70 hover:bg-brand-background/10 hover:text-brand-background'
                )}
                onClick={onClose}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
