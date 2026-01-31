'use client';

import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import { CheckCircle2 } from 'lucide-react';

const cards = [
  {
    title: 'Text to Mastery Notes',
    description:
      'Turn dense course material into clean, structured notes in minutes. Capture key ideas without drowning in highlights.',
    bullets: [
      'Auto-generated summaries and key takeaways',
      'Clean formatting optimized for review',
      'Source-linked notes you can trust',
    ],
    cta: 'Try Note Builder',
    image: '/images/docs/notebook.png',
  },
  {
    title: 'Adaptive Study Plans',
    description:
      'Set your exam date and let the AI plan your sessions. Every week adjusts to your progress automatically.',
    bullets: [
      'Daily plans with built-in revision cycles',
      'Weak-spot detection across topics',
      'Progress tracking that stays focused',
    ],
    cta: 'Build My Plan',
    image: '/images/docs/banner.png',
  },
  {
    title: 'Practice That Improves',
    description:
      'Short, targeted quizzes that adapt as you improve. Spend time where it matters most.',
    bullets: [
      'Question difficulty adapts in real time',
      'Focused drills for specific chapters',
      'Retention checks that feel lightweight',
    ],
    cta: 'Start Practicing',
    image: '/blocks/charts-light.png',
  },
] as const;

export default function ScrollStackShowcaseSection() {
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
                    <ul className="mt-6 space-y-3 text-sm text-slate-700">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
