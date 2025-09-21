'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { TopBar } from '@/components/top-bar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-brand-background text-brand-primary">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen flex-1 flex-col lg:pl-72">
        <TopBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="flex-1 px-6 pb-20 pt-8 lg:px-10 xl:px-16">
          {children}
        </main>
      </div>
    </div>
  );
}
