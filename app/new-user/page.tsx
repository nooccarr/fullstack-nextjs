import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const createNewUser = async () => {
  const user = await currentUser();
  console.log('USER:', user);

  // sign in
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  // sign up
  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/journal');
};

const NewUser = async () => {
  await createNewUser();
  return <div>hi</div>;
};

export default NewUser;
