import { createStore } from 'effector';
import { loadBooks } from '@modules/books/states';

type EffectorFailureResponse = {
  error: Error;
};

const initialState: BooksState = {
  isLoading: false,
  hasError: false,
  error: '',
  data: [],
};

const onLoadingBooks = (currentState: BooksState, isLoading: boolean) => ({ ...currentState, isLoading });

const onLoadBooksSuccess = (currentState: BooksState, data: Array<Book>) => ({
  ...currentState,
  isLoading: false,
  data,
});

const onLoadBooksFailure = (currentState: BooksState, response: EffectorFailureResponse) => ({
  ...currentState,
  isLoading: false,
  hasError: true,
  error: response.error.message,
});

const booksStore = createStore<BooksState>(initialState)
  .on(loadBooks.pending, onLoadingBooks)
  .on(loadBooks.doneData, onLoadBooksSuccess)
  .on(loadBooks.fail, onLoadBooksFailure);

export { booksStore };
