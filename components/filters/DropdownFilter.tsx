interface DropdownFilterProps {
  id: string;
  label: string;
  options: string[];
}

export function DropdownFilter({ id, label, options }: DropdownFilterProps) {
  return (
    <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-brand-primary">
      {label}
      <select
        id={id}
        className="rounded-xl border border-brand-primary/20 bg-white px-4 py-3 text-sm font-medium text-brand-primary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
