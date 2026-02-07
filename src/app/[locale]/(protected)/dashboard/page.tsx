'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { PdfViewer } from '@/components/study/pdf-viewer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { uploadFileFromBrowser } from '@/storage';
import {
  FileTextIcon,
  MessageCircleIcon,
  SparklesIcon,
  UploadCloudIcon,
} from 'lucide-react';

interface UploadedFile {
  name: string;
  url: string;
  key: string;
  file?: File;
}

const MODULES = ['Overview', 'Core Ideas', 'Examples', 'Practice'];

export default function DashboardPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [currentFile, setCurrentFile] = useState<UploadedFile | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className="min-h-[calc(100vh-var(--header-height))] bg-gradient-to-br from-sky-50 via-white to-sky-100/70 px-6 py-8">
      <header className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="rounded-full border border-sky-100 bg-white/80 p-2 shadow-sm" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-sky-500">
              Study Room
            </p>
            <h1 className="font-serif text-2xl text-slate-900">
              Quiet reading, clear thinking
            </h1>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Badge className="rounded-full bg-sky-100 px-3 py-1 text-xs text-sky-700">
            7 credits
          </Badge>
          <Button className="rounded-full bg-sky-600 px-4 text-sm text-white hover:bg-sky-700">
            Upgrade
          </Button>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {MODULES.map((module, index) => (
                <Button
                  key={module}
                  variant={index === 0 ? 'default' : 'outline'}
                  className={
                    index === 0
                      ? 'rounded-full bg-sky-600 text-white hover:bg-sky-700'
                      : 'rounded-full border-sky-200 bg-white/60 text-slate-600 hover:border-sky-300'
                  }
                >
                  {module}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                variant="outline"
                className="rounded-full border-sky-200 bg-white/60 text-slate-700 hover:border-sky-300"
                onClick={() => inputRef.current?.click()}
                disabled={isUploading}
              >
                <UploadCloudIcon className="mr-2 size-4" />
                {isUploading ? 'Uploading...' : 'Upload PDF'}
              </Button>
            </div>
          </div>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
              {error}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            {files.length === 0 ? (
              <span className="text-xs text-slate-400">
                No files yet. Upload to start reading.
              </span>
            ) : (
              files.map((file) => (
                <Button
                  key={file.key}
                  variant={
                    currentFile?.key === file.key ? 'default' : 'outline'
                  }
                  size="sm"
                  className={
                    currentFile?.key === file.key
                      ? 'rounded-full bg-sky-600 text-white'
                      : 'rounded-full border-sky-100 bg-white/70 text-slate-600'
                  }
                  onClick={() => setCurrentFile(file)}
                >
                  <FileTextIcon className="mr-1 size-3" />
                  {file.name}
                </Button>
              ))
            )}
          </div>

          <PdfViewer
            file={currentFile?.file ?? currentFile?.url}
            title={currentFile?.name}
            className="min-h-[560px]"
          />
        </section>

        <aside className="flex flex-col gap-4">
          <div className="rounded-3xl border border-sky-100/80 bg-white/80 p-5 shadow-[0_12px_40px_-24px_rgba(14,116,144,0.35)]">
            <div className="flex items-center gap-2 text-slate-800">
              <MessageCircleIcon className="size-4 text-sky-600" />
              <span className="text-sm font-semibold">AI Chat</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Ask about your document. Answers will reference pages.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 px-3 py-2">
                What are the core ideas in this document?
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white/70 px-3 py-2">
                Upload a PDF to start the conversation.
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50/60 px-3 py-2">
              <input
                className="w-full bg-transparent text-sm text-slate-400 outline-none"
                placeholder="Chat coming soon..."
                disabled
              />
            </div>
          </div>

          <div className="rounded-3xl border border-sky-100/80 bg-sky-50/70 p-5">
            <div className="flex items-center gap-2 text-slate-700">
              <SparklesIcon className="size-4 text-sky-500" />
              <span className="text-sm font-semibold">Today</span>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Scan the outline first, then read page by page.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
