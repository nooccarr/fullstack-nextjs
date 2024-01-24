import Editor from '@/components/Editor';
import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntry = async (id) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        // compound @@unique([userId, id])
        userId: user.id,
        id,
      },
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  return (
    <div className="h-full w-full">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;

// you can render client components in server components
