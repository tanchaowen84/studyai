import { getDb } from '@/db';
import { studyRoom } from '@/db/schema';
import { PdfViewer } from '@/components/study/pdf-viewer';
import { getSession } from '@/lib/server';
import { and, eq } from 'drizzle-orm';
import { MessageCircleIcon, ArrowUpRightIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function StudyroomRoomPage({
  params,
}: {
  params: Promise<{ locale: string; roomId: string }>;
}) {
  const { roomId } = await params;
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return notFound();
  }

  const db = await getDb();
  const [room] = await db
    .select({
      id: studyRoom.id,
      title: studyRoom.title,
      fileUrl: studyRoom.fileUrl,
    })
    .from(studyRoom)
    .where(and(eq(studyRoom.id, roomId), eq(studyRoom.ownerId, userId)))
    .limit(1);

  if (!room) {
    return notFound();
  }

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden px-5 pt-4 pb-4 text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(187,220,255,0.45)_0%,rgba(248,252,255,0.92)_55%,rgba(245,250,255,1)_100%)]" />

      <div className="grid min-h-0 flex-1 items-stretch gap-0 xl:grid-cols-[minmax(0,1fr)_460px]">
        <section className="flex min-h-0 flex-col pr-8 pb-4">
          <PdfViewer file={room.fileUrl} variant="minimal" className="min-h-0 flex-1" />
        </section>

        <aside className="flex min-h-0 flex-col border-l-2 border-slate-200/70 pl-8 pb-4">
          <div className="flex items-center gap-2 text-slate-600">
            <MessageCircleIcon className="size-4" />
            <span className="text-sm font-semibold">AI Chat</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Ask about your document. Answers will reference pages.
          </p>
          <div className="mt-6 flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto pr-2 text-sm text-slate-400">
              No messages yet.
            </div>
            <div className="mt-4 rounded-[24px] border border-slate-200/70 bg-white/80 px-4 py-3 shadow-[0_18px_50px_-40px_rgba(30,64,120,0.4)]">
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
          </div>
        </aside>
      </div>
    </div>
  );
}
