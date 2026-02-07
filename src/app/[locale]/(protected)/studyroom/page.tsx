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
  FileTextIcon,
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

const MODULES = ['Overview', 'Core Ideas', 'Examples', 'Practice'];

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
    <div className="min-h-[calc(100vh-var(--header-height))] bg-[#F5F9FF] px-6 py-8">
      <header className="mb-10 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="rounded-full border border-slate-200/70 bg-white/80 p-2" />
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
          <Badge className="rounded-full bg-white/80 px-3 py-1 text-xs text-slate-500">
            7 credits
          </Badge>
          <Button className="rounded-full bg-sky-600 px-4 text-sm text-white hover:bg-sky-700">
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
        <div className="max-w-4xl space-y-6">
          <div className="rounded-[28px] border border-slate-200/70 bg-white/80 px-6 py-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <MessageCircleIcon className="size-4" />
              </div>
              <div className="flex min-w-[220px] flex-1 flex-col gap-1">
                <input
                  className="w-full bg-transparent text-sm text-slate-600 outline-none"
                  placeholder="Ask Study Chat a question..."
                />
                <span className="text-[11px] text-slate-400">
                  Type or paste. Upload a PDF to create a room.
                </span>
              </div>
              <Button
                variant="ghost"
                className="rounded-full border border-slate-200/70 bg-white px-4 text-sm text-slate-500"
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
            className="group flex w-full flex-col items-center justify-center rounded-[32px] border border-dashed border-slate-300/70 bg-white/60 px-6 py-14 text-center transition hover:border-slate-400"
            onClick={() => inputRef.current?.click()}
            disabled={isUploading}
          >
            <span className="flex size-12 items-center justify-center rounded-full border border-slate-300/70 bg-white text-slate-400">
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
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <section className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {MODULES.map((module, index) => (
                  <Button
                    key={module}
                    variant="ghost"
                    className={
                      index === 0
                        ? 'rounded-full bg-sky-600/90 px-4 text-white hover:bg-sky-700'
                        : 'rounded-full border border-slate-200/80 bg-white/70 px-4 text-slate-500 hover:border-slate-300'
                    }
                  >
                    {module}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                className="rounded-full border-slate-200/70 bg-white/70 text-slate-600"
                onClick={() => inputRef.current?.click()}
              >
                <UploadCloudIcon className="mr-2 size-4" />
                Upload PDF
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {files.map((file) => (
                <Button
                  key={file.key}
                  variant={
                    currentFile?.key === file.key ? 'default' : 'outline'
                  }
                  size="sm"
                  className={
                    currentFile?.key === file.key
                      ? 'rounded-full bg-sky-600 text-white'
                      : 'rounded-full border-slate-200 bg-white/70 text-slate-500'
                  }
                  onClick={() => setCurrentFile(file)}
                >
                  <FileTextIcon className="mr-1 size-3" />
                  {file.name}
                </Button>
              ))}
            </div>

            <PdfViewer
              file={currentFile?.file ?? currentFile?.url}
              title={currentFile?.name}
              className="min-h-[560px]"
            />
          </section>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[28px] border border-slate-200/70 bg-white/80 p-5">
              <div className="flex items-center gap-2 text-slate-700">
                <MessageCircleIcon className="size-4 text-slate-500" />
                <span className="text-sm font-semibold">AI Chat</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Ask about your document. Answers will reference pages.
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-3 py-3">
                <input
                  className="w-full bg-transparent text-sm text-slate-500 outline-none"
                  placeholder="Ask a question..."
                />
              </div>
              <Button
                variant="ghost"
                className="mt-4 w-full rounded-full border border-slate-200 bg-white text-slate-500"
              >
                Send
                <ArrowUpRightIcon className="ml-2 size-4" />
              </Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
