'use client';

import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { LocaleLink, useLocaleRouter } from '@/i18n/navigation';
import { uploadFileFromBrowser } from '@/storage';
import {
  ArrowUpRightIcon,
  MessageCircleIcon,
  PlusIcon,
  UploadCloudIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudyRoom {
  id: string;
  title: string;
  fileUrl: string;
  pageCount: number | null;
  updatedAt: string;
  createdAt: string;
}

export default function StudyroomPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rooms, setRooms] = useState<StudyRoom[]>([]);
  const [isLoadingRooms, setIsLoadingRooms] = useState(true);
  const [roomsError, setRoomsError] = useState<string | null>(null);
  const router = useLocaleRouter();

  const pagePadding = 'px-6 py-8';
  const pageHeight = 'min-h-[calc(100vh-var(--header-height))]';

  useEffect(() => {
    let isActive = true;

    const loadRooms = async () => {
      try {
        const response = await fetch('/api/studyroom');
        if (!response.ok) {
          throw new Error('Failed to load rooms');
        }
        const data = (await response.json()) as { rooms: StudyRoom[] };
        if (isActive) {
          setRooms(data.rooms || []);
        }
      } catch (err) {
        if (isActive) {
          setRoomsError(err instanceof Error ? err.message : 'Load failed');
        }
      } finally {
        if (isActive) {
          setIsLoadingRooms(false);
        }
      }
    };

    loadRooms();
    return () => {
      isActive = false;
    };
  }, []);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      const result = await uploadFileFromBrowser(file, 'study');
      const response = await fetch('/api/studyroom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: file.name.replace(/\.[^/.]+$/, ''),
          fileUrl: result.url,
          fileKey: result.key,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || 'Failed to create room');
      }

      const { id } = (await response.json()) as { id: string };
      router.push(`/studyroom/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await handleUpload(file);
    event.target.value = '';
  };

  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden text-slate-900',
        pageHeight,
        pagePadding
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(187,220,255,0.45)_0%,rgba(248,252,255,0.92)_55%,rgba(245,250,255,1)_100%)]" />
      <header className="mb-10 flex flex-wrap items-center gap-4 animate-in fade-in-0">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="rounded-full border border-slate-200/60 bg-white/70 p-2 text-slate-500 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.35)] backdrop-blur" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400">
                Studyroom
              </p>
              <h1 className="font-serif text-2xl text-slate-900">
                Hey, what do you want to master?
              </h1>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-full border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-500"
            >
              7 credits
            </Badge>
            <Button className="rounded-full bg-sky-600/90 px-4 text-sm text-white shadow-[0_14px_30px_-18px_rgba(14,116,144,0.75)] hover:bg-sky-700">
              Upgrade
            </Button>
          </div>
        </header>

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      {error ? (
        <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
          {error}
        </div>
      ) : null}

      <div className="max-w-5xl space-y-8 animate-in fade-in-0">
        <div className="rounded-[32px] border border-slate-200/70 bg-white/70 px-6 py-6 shadow-[0_26px_70px_-60px_rgba(30,64,120,0.55)]">
            <div className="flex flex-wrap items-start gap-4">
              <div className="mt-1 flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <MessageCircleIcon className="size-4" />
              </div>
              <div className="flex min-w-[240px] flex-1 flex-col gap-3">
                <textarea
                  rows={3}
                  className="w-full resize-none bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400 sm:text-base"
                  placeholder="Ask Studyroom a question or paste your notes..."
                />
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                  <span>Ask a question or paste text.</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>Upload a PDF to create a room.</span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="rounded-full border border-slate-200/70 bg-white/80 px-4 text-sm text-slate-500"
                onClick={() => inputRef.current?.click()}
                disabled={isUploading}
              >
                <UploadCloudIcon className="mr-2 size-4" />
                {isUploading ? 'Uploading...' : 'Upload PDF'}
              </Button>
            </div>
        </div>

        <button
          type="button"
          className="group flex w-full flex-col items-center justify-center rounded-[36px] border border-dashed border-slate-300/70 bg-white/50 px-6 py-14 text-center transition hover:border-slate-400"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
        >
          <span className="flex size-12 items-center justify-center rounded-full border border-slate-300/70 bg-white text-slate-400 transition group-hover:text-slate-500">
            <PlusIcon className="size-5" />
          </span>
          <span className="mt-4 text-sm font-medium text-slate-600">
            Create a room
          </span>
          <span className="mt-1 text-xs text-slate-400">
            Upload a PDF or document to get started
          </span>
        </button>

        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-700">
              Recent rooms
            </h2>
            {rooms.length > 0 && (
              <span className="text-xs text-slate-400">
                {rooms.length} total
              </span>
            )}
          </div>

          {roomsError && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {roomsError}
            </div>
          )}

          {isLoadingRooms ? (
            <div className="space-y-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="h-16 rounded-2xl border border-slate-200/60 bg-white/60"
                />
              ))}
            </div>
          ) : rooms.length === 0 ? (
            <p className="text-sm text-slate-400">
              No rooms yet. Upload a PDF to create your first room.
            </p>
          ) : (
            <div className="divide-y divide-slate-200/70 rounded-2xl border border-slate-200/60 bg-white/60">
              {rooms.map((room) => (
                <LocaleLink
                  key={room.id}
                  href={`/studyroom/${room.id}`}
                  className="flex items-center justify-between gap-4 px-4 py-4 text-sm text-slate-600 transition hover:bg-white/70"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-700">
                      {room.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Updated{' '}
                      {new Date(room.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="size-4 shrink-0 text-slate-400" />
                </LocaleLink>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
