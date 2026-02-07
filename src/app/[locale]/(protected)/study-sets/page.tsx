'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  FolderIcon,
  MicIcon,
  SearchIcon,
  UploadCloudIcon,
  ClipboardPenIcon,
} from 'lucide-react';

const STUDY_SETS = [
  {
    title: 'Personality Disorders Overview',
    stats: [
      { label: 'Unfamiliar', value: 154 },
      { label: 'Learning', value: 8 },
      { label: 'Familiar', value: 2 },
      { label: 'Mastered', value: 0 },
    ],
    progress: 12,
  },
  {
    title: 'Intro to quantum mechanics',
    stats: [
      { label: 'Unfamiliar', value: 74 },
      { label: 'Learning', value: 1 },
      { label: 'Familiar', value: 0 },
      { label: 'Mastered', value: 0 },
    ],
    progress: 4,
  },
  {
    title: 'Neurology exam prep',
    stats: [
      { label: 'Unfamiliar', value: 15 },
      { label: 'Learning', value: 1 },
      { label: 'Familiar', value: 0 },
      { label: 'Mastered', value: 0 },
    ],
    progress: 6,
  },
  {
    title: 'Thermodynamics basics',
    stats: [
      { label: 'Unfamiliar', value: 62 },
      { label: 'Learning', value: 12 },
      { label: 'Familiar', value: 4 },
      { label: 'Mastered', value: 1 },
    ],
    progress: 19,
  },
  {
    title: 'Signals & Systems',
    stats: [
      { label: 'Unfamiliar', value: 88 },
      { label: 'Learning', value: 6 },
      { label: 'Familiar', value: 1 },
      { label: 'Mastered', value: 0 },
    ],
    progress: 9,
  },
  {
    title: 'Modern Chinese Literature',
    stats: [
      { label: 'Unfamiliar', value: 42 },
      { label: 'Learning', value: 6 },
      { label: 'Familiar', value: 3 },
      { label: 'Mastered', value: 1 },
    ],
    progress: 22,
  },
];

export default function StudySetsPage() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gradient-to-br from-sky-50 via-white to-sky-100/70 px-6 py-8">
      <header className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="rounded-full border border-sky-100 bg-white/80 p-2 shadow-sm" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-sky-500">
              Study Sets
            </p>
            <h1 className="font-serif text-2xl text-slate-900">
              Hey, what do you wanna master?
            </h1>
          </div>
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search"
              className="h-10 w-48 rounded-full border-sky-100 bg-white/80 pl-9 text-sm"
            />
          </div>
          <Button
            variant="outline"
            className="rounded-full border-sky-100 bg-white/80 text-slate-600"
          >
            <FolderIcon className="mr-2 size-4" />
            Folders
          </Button>
        </div>
      </header>

      <section className="mb-10">
        <p className="text-sm text-slate-500">
          Upload anything and get interactive study materials.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Upload',
              description: 'PDF, docs, slides',
              icon: UploadCloudIcon,
            },
            {
              title: 'Paste',
              description: 'Text, links',
              icon: ClipboardPenIcon,
            },
            {
              title: 'Record',
              description: 'Audio notes',
              icon: MicIcon,
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border-sky-100 bg-white/80 shadow-[0_10px_30px_-24px_rgba(14,116,144,0.35)]"
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-500">
              All Study Sets
            </p>
            <p className="text-sm text-slate-500">Your recent study sets</p>
          </div>
          <Button className="rounded-full bg-sky-600 text-white hover:bg-sky-700">
            New Set
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {STUDY_SETS.map((set) => (
            <Card
              key={set.title}
              className="rounded-3xl border-sky-100 bg-white/80 shadow-[0_10px_30px_-24px_rgba(14,116,144,0.35)]"
            >
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    {set.title}
                  </p>
                  <p className="text-xs text-slate-500">Your path to mastery</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {set.stats.map((stat) => (
                    <Badge
                      key={stat.label}
                      className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] text-slate-600"
                    >
                      {stat.value} {stat.label}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Progress
                    value={set.progress}
                    className="h-2 bg-sky-100"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span>{set.progress}%</span>
                    <span>Updated just now</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
