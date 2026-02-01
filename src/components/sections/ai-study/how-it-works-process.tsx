import { CalendarDays, CreditCard, Store } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const toneStyles = {
  amber: 'bg-[#F7B84B] text-slate-900',
  blue: 'bg-[#5C8DFF] text-white',
  green: 'bg-[#8BD17C] text-slate-900',
} as const;

export default async function HowItWorksProcessSection() {
  const t = await getTranslations('HomePage.howItWorksProcess');

  const steps = [
    {
      title: t('steps.step-1.title'),
      description: t('steps.step-1.description'),
      button: t('steps.step-1.button'),
      icon: CalendarDays,
      tone: 'amber',
    },
    {
      title: t('steps.step-2.title'),
      description: t('steps.step-2.description'),
      button: t('steps.step-2.button'),
      icon: Store,
      tone: 'blue',
    },
    {
      title: t('steps.step-3.title'),
      description: t('steps.step-3.description'),
      button: t('steps.step-3.button'),
      icon: CreditCard,
      tone: 'green',
    },
  ] as const;

  return (
    <section id="how-it-works-process" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
          {t('eyebrow')}
        </span>
        <h2 className="mt-4 text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-base text-slate-700/80 md:text-lg">
          {t('description')}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex h-full min-h-[320px] flex-col rounded-[36px] border border-white/70 bg-[#ECF2FF] p-8 text-left shadow-[0_20px_45px_rgba(30,60,110,0.2)] sm:min-h-[360px]"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_6px_18px_rgba(30,60,110,0.18)] ${toneStyles[step.tone]}`}
              >
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700/80">
                {step.description}
              </p>
              <button
                type="button"
                className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-[0_8px_20px_rgba(30,60,110,0.15)] transition hover:translate-y-0.5"
              >
                {step.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
