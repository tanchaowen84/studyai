'use client';

import { BottomLink } from '@/components/auth/bottom-link';
import { Logo } from '@/components/layout/logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface AuthCardProps {
  children: React.ReactNode;
  headerLabel: string;
  bottomButtonLabel?: string;
  bottomButtonHref?: string;
  className?: string;
}

export const AuthCard = ({
  children,
  headerLabel,
  bottomButtonLabel,
  bottomButtonHref,
  className,
}: AuthCardProps) => {
  return (
    <Card
      className={cn(
        'border border-slate-200/80 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.18)]',
        className
      )}
    >
      <CardHeader className="flex flex-col items-center gap-3 pb-4">
        <LocaleLink href="/" prefetch={false}>
          <Logo className="mb-2" />
        </LocaleLink>
        <CardDescription className="text-slate-600">
          {headerLabel}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="min-h-[32px] justify-center">
        {bottomButtonLabel && bottomButtonHref ? (
          <BottomLink label={bottomButtonLabel} href={bottomButtonHref} />
        ) : (
          <div aria-hidden="true" />
        )}
      </CardFooter>
    </Card>
  );
};
