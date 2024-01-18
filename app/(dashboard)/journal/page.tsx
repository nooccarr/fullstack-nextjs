import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntries = async () => {
  const user = await getUserByClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc', // newest at the top
    },
  });

  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  console.log(entries);

  return <div>journal</div>;
};

export default JournalPage;
