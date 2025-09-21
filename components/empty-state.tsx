import { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  visual?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
  visual,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-brand-primary/30 bg-white/80 p-12 text-center shadow-inner">
      {visual ? <div className="mb-8 w-full max-w-sm">{visual}</div> : null}
      <h2 className="text-xl font-black uppercase tracking-[0.3em] text-brand-primary">
        {title}
      </h2>
      <p className="mt-4 max-w-lg text-sm text-brand-primary/80">
        {description}
      </p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
