'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { PdfViewer } from '@/components/study/pdf-viewer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { uploadFileFromBrowser } from '@/storage';
import {
  ArrowUpRightIcon,
  MessageCircleIcon,
  PlusIcon,
  UploadCloudIcon,
} from 'lucide-react';

interface UploadedFile {
  name: string;
  url: string;
  key: string;
  file?: File;
}

export default function StudyroomPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [currentFile, setCurrentFile] = useState<UploadedFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasRoom = Boolean(currentFile);

  const handleUpload = async (file: File) => {
    setIsUploading(true);
    setError(null);

    try {
      const result = await uploadFileFromBrowser(file, 'study');
      const uploaded = {
        name: file.name,
        url: result.url,
        key: result.key,
        file,
      };

      setFiles((prev) => [uploaded, ...prev]);
      setCurrentFile(uploaded);
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
    <div className="relative min-h-[calc(100vh-var(--header-height))] overflow-hidden px-6 py-8 text-slate-900">
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

      {!hasRoom ? (
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
        </div>
      ) : (
        <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_420px]">
          <section className="flex flex-col pr-8">
            <PdfViewer
              file={currentFile?.file ?? currentFile?.url}
              variant="minimal"
              className="min-h-[720px]"
            />
          </section>

          <aside className="flex min-h-[720px] flex-col border-l-2 border-slate-200/70 pl-8">
            <div className="flex items-center gap-2 text-slate-600">
              <MessageCircleIcon className="size-4" />
              <span className="text-sm font-semibold">AI Chat</span>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Ask about your document. Answers will reference pages.
            </p>
            <div className="mt-6 flex flex-1 flex-col">
              <div className="flex-1 text-sm text-slate-400">
                No messages yet.
              </div>
              <div className="mt-6 rounded-[24px] border border-slate-200/70 bg-white/80 px-4 py-3 shadow-[0_18px_50px_-40px_rgba(30,64,120,0.4)]">
                <div className="flex items-end gap-3">
                  <textarea
                    rows={2}
                    className="flex-1 resize-none bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400"
                    placeholder="Ask a question..."
                  />
                  <button
                    type="button"
                    className="flex size-9 items-center justify-center rounded-full bg-sky-600/90 text-white shadow-[0_10px_24px_-16px_rgba(14,116,144,0.7)] transition hover:bg-sky-700"
                  >
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Double-check important information.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
