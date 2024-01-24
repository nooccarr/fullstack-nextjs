const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">summary</div>
      <div className="px-4 py-5 sm:px-6">mood</div>
    </div>
  );
};

export default EntryCard;

// for responsiveness
// sm:px-6 when small do this instead

// new Date(entry.createdAt); -> gives us a date object
// toDateString() -> gives us a string
// toLocaleDateString() -> gives us a string in the local timezone
