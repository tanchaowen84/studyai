import { ArrowUpRight } from 'lucide-react';

export default function CtaProcessSection() {
  return (
    <section id="cta-process" className="bg-[#8DB6F0] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
              Ready to start?
            </span>
            <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
              Bring your study plan to life today.
            </h2>
            <p className="mt-4 text-base text-slate-700/80 md:text-lg">
              Upload your materials, set your goal, and let AI guide every
              session. Start free and see results in days, not months.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Start Free
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:translate-y-0.5"
            >
              Talk to Us
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
