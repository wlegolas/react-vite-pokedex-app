import { createEffect } from 'effector';

const fetchBooks = async () => {
  const url = `https://example-data.draftbit.com/books?_limit=10`;
  const req = await fetch(url);

  return req.json();
};

const loadBooks = createEffect<void, Array<Book>, Error>({
  name: 'Load Books',
  handler: fetchBooks,
});

export { loadBooks };
