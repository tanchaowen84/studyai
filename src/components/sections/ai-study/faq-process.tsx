'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How much can I earn donating plasma?',
    answer:
      'Earnings vary by location and promotions. Most donors can expect a predictable payout that increases with consistent visits.',
  },
  {
    question: 'Am I eligible to donate plasma?',
    answer:
      'Most healthy adults ages 18-65 can donate. You will complete a screening before your first donation, including health checks and a brief exam.',
  },
  {
    question: 'How often can I donate and how long does it take?',
    answer:
      'Donation typically takes about an hour. Most donors can donate up to twice per week with at least one day between visits.',
  },
  {
    question: 'What exactly is plasma and how does it help people?',
    answer:
      'Plasma is the liquid part of blood. It is used to create therapies for patients with immune disorders and other critical conditions.',
  },
  {
    question: 'Is plasma donation safe?',
    answer:
      'Yes. Donation centers follow strict safety protocols. Single-use, sterile equipment is used every time.',
  },
  {
    question: 'How do I schedule appointments and track my earnings?',
    answer:
      'Everything is handled in the app: book appointments, check in, and track earnings in one place.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Your first visit includes a health screening and a short overview of the process. Staff will guide you through each step.',
  },
] as const;

export default function FaqProcessSection() {
  return (
    <section id="faq-process" className="bg-[#C1D6FA] px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="space-y-6 md:pr-4 lg:pr-8">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-700/80">
            FAQ
          </span>
          <h2 className="text-balance font-bricolage-grotesque text-4xl font-semibold text-slate-900 md:text-5xl">
            All the details.
          </h2>
          <p className="text-base text-slate-700/80 md:text-lg">
            Got a question? We can answer it.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/70 px-5 py-2 text-xs font-semibold text-slate-700 shadow-[0_8px_20px_rgba(30,60,110,0.15)] transition hover:translate-y-0.5"
          >
            Join Waitlist
          </button>
        </div>

        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="item-2"
          className="space-y-0 md:pl-2 lg:pl-6"
        >
          {faqs.map((faq, index) => (
            <AccordionPrimitive.Item
              key={faq.question}
              value={`item-${index + 1}`}
              className="border-b border-white/50 py-4 first:border-t"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-4 text-left">
                  <span className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-white/60 text-slate-700">
                    <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                    <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden text-sm text-slate-700/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pt-3 pr-8">
                  {faq.answer}
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}
