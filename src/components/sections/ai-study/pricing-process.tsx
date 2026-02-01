import { PricingTable } from '@/components/pricing/pricing-table';
import { getTranslations } from 'next-intl/server';

export default async function PricingProcessSection() {
  const t = await getTranslations('HomePage.pricingProcess');

  return (
    <section id="pricing-process" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-slate-700/80 md:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="mt-12">
          <PricingTable className="pricing-process" />
        </div>
      </div>
    </section>
  );
}
