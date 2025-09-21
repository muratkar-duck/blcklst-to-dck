import { Heart } from 'lucide-react';
import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { InlinePoster } from '@/components/inline/InlinePoster';

interface ProjectCardProps {
  title: string;
  logline: string;
  ratings: number;
  format?: string;
  liked?: boolean;
  actions?: ReactNode;
}

export function ProjectCard({
  title,
  logline,
  ratings,
  format,
  liked,
  actions,
}: ProjectCardProps) {
  return (
    <Card className="grid gap-6 md:grid-cols-[160px,1fr]">
      <InlinePoster className="mx-auto h-48 w-32" />
      <CardContent className="flex flex-col gap-4 md:gap-6">
        <CardHeader className="m-0 space-y-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {format ? (
            <span className="text-xs font-semibold uppercase tracking-wide text-brand-primary/60">
              {format}
            </span>
          ) : null}
          <CardDescription>{logline}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex flex-wrap items-center gap-4 text-sm text-brand-primary/80">
          <span className="flex items-center gap-2 font-semibold">
            <Heart
              className="h-4 w-4"
              aria-hidden="true"
              fill={liked ? '#ffaa06' : 'none'}
              strokeWidth={liked ? 0 : 2}
            />
            {ratings} ratings
          </span>
          {actions}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
