'use client';

import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { useTranslations } from 'next-intl';

export default function ScrollStackShowcaseSection() {
  const t = useTranslations('HomePage.scrollStack');

  const cards = [
    {
      title: t('cards.card-1.title'),
      description: t('cards.card-1.description'),
      subtext: t.raw('cards.card-1.subtext') as string[],
      cta: t('cards.card-1.cta'),
      image: '/images/docs/notebook.png',
    },
    {
      title: t('cards.card-2.title'),
      description: t('cards.card-2.description'),
      subtext: t.raw('cards.card-2.subtext') as string[],
      cta: t('cards.card-2.cta'),
      image: '/images/docs/banner.png',
    },
    {
      title: t('cards.card-3.title'),
      description: t('cards.card-3.description'),
      subtext: t.raw('cards.card-3.subtext') as string[],
      cta: t('cards.card-3.cta'),
      image: '/blocks/charts-light.png',
    },
  ] as const;

  return (
    <section id="scroll-stack-showcase" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollStack
          className="ai-scroll-stack"
          useWindowScroll
          enableSmoothScroll={false}
          itemDistance={140}
          itemScale={0.045}
          itemStackDistance={26}
          stackPosition="18%"
          scaleEndPosition="8%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
        >
          {cards.map((card) => (
            <ScrollStackItem key={card.title} itemClassName="ai-scroll-stack-card">
              <div className="grid h-full items-stretch gap-12 lg:grid-cols-2">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-balance font-bricolage-grotesque text-3xl font-semibold text-slate-900 md:text-4xl">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-base text-slate-600 md:text-lg">
                      {card.description}
                    </p>
                    <div className="mt-6 space-y-4 text-sm text-slate-700">
                      {card.subtext.map((line) => (
                        <p key={line} className="leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {card.cta}
                    </button>
                  </div>
                </div>

                <div className="flex h-full items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[620px]">
                    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:h-[400px]">
                      <div className="relative h-[260px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-[300px] lg:h-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(min-width: 1024px) 620px, 90vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
