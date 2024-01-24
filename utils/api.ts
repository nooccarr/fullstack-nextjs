// utility function that creates a URL for us
const createURL = (path) => {
  return window.location.origin + path;
};

export const updateEntry = async (id, content) => {
  const res = await fetch(new Request(createURL(`/api/journal/${id}`)), {
    method: 'PATCH',
    body: JSON.stringify({ content }),
    // headers: new Headers({})
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }

  // .. when error
  // return { error: true, code: 2323, messageForUI: 'asdfqwerzxcv' }
};

export const createNewEntry = async () => {
  const res = await fetch(new Request(createURL('/api/journal')), {
    method: 'POST',
    // body: JSON.stringify({}),
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

// create a unified error handling system with appropriate messages / status codes

// creates the URL      createURL
// creates the request  new Request
// creates the fetch    fetch

// this is all happending on the client
