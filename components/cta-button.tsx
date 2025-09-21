import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/button';

interface CTAButtonProps extends ButtonProps {
  href: string;
  label: string;
}

export function CTAButton({ href, label, ...props }: CTAButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
