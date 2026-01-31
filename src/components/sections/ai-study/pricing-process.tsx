import { PricingTable } from '@/components/pricing/pricing-table';

export default function PricingProcessSection() {
  return (
    <section id="pricing-process" className="bg-[#8DB6F0] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
            Pricing
          </span>
          <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            Simple plans, clear outcomes.
          </h2>
          <p className="mt-4 text-base text-slate-700/80 md:text-lg">
            Start free, upgrade when you are ready. Every plan is built to keep
            your learning on track.
          </p>
        </div>

        <div className="mt-12">
          <PricingTable className="pricing-process" />
        </div>
      </div>
    </section>
  );
}
