import { redirect } from 'next/navigation';

interface DashboardRedirectProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardRedirect({
  params,
}: DashboardRedirectProps) {
  const { locale } = await params;
  redirect(`/${locale}/studyroom`);
}
