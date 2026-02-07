import { getDb } from '@/db';
import { studyRoom } from '@/db/schema';
import { getSession } from '@/lib/server';
import { desc, eq } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createRoomSchema = z.object({
  title: z.string().trim().min(1),
  fileUrl: z.string().url(),
  fileKey: z.string().min(1),
  pageCount: z.number().int().positive().optional().nullable(),
});

export async function GET() {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = await getDb();
  const rooms = await db
    .select({
      id: studyRoom.id,
      title: studyRoom.title,
      fileUrl: studyRoom.fileUrl,
      pageCount: studyRoom.pageCount,
      updatedAt: studyRoom.updatedAt,
      createdAt: studyRoom.createdAt,
    })
    .from(studyRoom)
    .where(eq(studyRoom.ownerId, userId))
    .orderBy(desc(studyRoom.updatedAt))
    .limit(6);

  return NextResponse.json({ rooms });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = await request.json();
  const parsed = createRoomSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid payload', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { title, fileUrl, fileKey, pageCount } = parsed.data;
  const db = await getDb();
  const id = randomUUID();
  const now = new Date();

  await db.insert(studyRoom).values({
    id,
    title,
    fileUrl,
    fileKey,
    pageCount: pageCount ?? null,
    ownerId: userId,
    createdAt: now,
    updatedAt: now,
  });

  return NextResponse.json({ id });
}
