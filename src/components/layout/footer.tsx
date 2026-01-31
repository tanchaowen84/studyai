'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { getFooterLinks } from '@/config/footer-config';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import type React from 'react';

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  const t = useTranslations();
  const footerLinks = getFooterLinks();
  const isSingleSection = footerLinks.length === 1;

  return (
    <footer className={cn('border-t border-white/70 bg-[#C1D6FA]', className)}>
      <Container className="px-4">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-6">
          <div className="flex flex-col items-start col-span-full md:col-span-2">
            <div className="space-y-4">
              {/* logo and name */}
              <div className="items-center space-x-2 flex">
                <Logo />
                <span className="text-xl font-semibold text-slate-900">
                  {t('Metadata.name')}
                </span>
              </div>

              {/* tagline */}
              <p className="text-slate-700/80 text-base py-2 md:pr-12">
                {t('Marketing.footer.tagline')}
              </p>

              {/* social links removed by request */}
            </div>
          </div>

          {/* footer links */}
          {footerLinks?.map((section) => (
            <div
              key={section.title}
              className={cn(
                'col-span-1 md:col-span-1 items-start',
                isSingleSection && 'md:col-start-6'
              )}
            >
              <span className="text-sm font-semibold uppercase text-slate-700/80">
                {section.title}
              </span>
              <ul className="mt-4 list-inside space-y-3">
                {section.items?.map(
                  (item) =>
                    item.href && (
                      <li key={item.title}>
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          className="text-sm text-slate-700/80 hover:text-slate-900"
                        >
                          {item.title}
                        </LocaleLink>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/70 py-8">
        <Container className="px-4 flex items-center justify-between gap-x-4">
          <span className="text-slate-700/80 text-sm">
            &copy; {new Date().getFullYear()} {t('Metadata.name')} All Rights
            Reserved.
          </span>

          <div className="flex items-center gap-x-4" />
        </Container>
      </div>
    </footer>
  );
}
