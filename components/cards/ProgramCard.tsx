import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProgramCardProps {
  name: string;
  type: string;
  dates: string;
  spots: string;
  actionLabel: string;
}

export function ProgramCard({
  name,
  type,
  dates,
  spots,
  actionLabel,
}: ProgramCardProps) {
  return (
    <Card className="space-y-4">
      <CardHeader className="space-y-1">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary/60">
          {type}
        </span>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-brand-primary/80">
        <CardDescription>Dates: {dates}</CardDescription>
        <CardDescription>{spots}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline">{actionLabel}</Button>
      </CardFooter>
    </Card>
  );
}
