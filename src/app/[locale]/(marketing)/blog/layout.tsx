import { websiteConfig } from '@/config/website';
import { notFound } from 'next/navigation';
import type { PropsWithChildren } from 'react';

export default function BlogLayout({ children }: PropsWithChildren) {
  if (!websiteConfig.features.enableBlogPage) {
    notFound();
  }

  return children;
}
