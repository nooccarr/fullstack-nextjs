'use client';

import { updateEntry } from '@/utils/api';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content); // first time it renders, never again until it re-renders
  const [isLoading, setIsLoading] = useState(false);

  useAutosave({
    data: value, // what do you want to watch for change
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });
  return (
    <div className="w-full h-full">
      {isLoading && <div>...loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;

// put it in a callback to make sure you're on the current reading cycle

// setValue(value + 'asdf')
// setValue(() => value + 'asdf')
