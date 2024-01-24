'use client';

import { createNewEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/entry/${data.id}`);
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  );
};

export default NewEntryCard;

// when we need interactivity (requires JavaScript)
// use client: React component

// can use hooks
// onClick

// cannot async

// router.push -> go to the new page
// router.pop -> go back to the previous page

// router.replace -> use this for a modal
