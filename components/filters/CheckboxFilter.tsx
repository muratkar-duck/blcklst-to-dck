'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CheckboxFilterProps {
  id: string;
  label: string;
  description?: string;
}

export function CheckboxFilter({
  id,
  label,
  description,
}: CheckboxFilterProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-brand-primary/10 bg-white px-4 py-3 shadow-sm">
      <Checkbox id={id} className="mt-1" />
      <div>
        <Label htmlFor={id} className="text-xs">
          {label}
        </Label>
        {description ? (
          <p className="mt-1 text-xs text-brand-primary/70">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
