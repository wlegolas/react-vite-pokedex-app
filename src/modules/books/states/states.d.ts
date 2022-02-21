type Book = {
  id: string,
  title: string,
  description: string,
  image_url: string,
  authors: string,
}

type BooksState = {
  isLoading: boolean,
  hasError: boolean,
  error: string,
  data: Array<Book>
};
