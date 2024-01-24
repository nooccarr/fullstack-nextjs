import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { NextResponse } from 'next/server';

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json();

  const user = await getUserByClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });

  return NextResponse.json({ data: updatedEntry });
};

// patch vs put (both UPDATES)
// patch is for partial updates (replace only the fields you want)
// put is for full updates (replace the whole thing)
