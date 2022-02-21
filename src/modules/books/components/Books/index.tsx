import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { BookItem, booksStore, loadBooks } from '@modules/books';
import { Container } from './styled';

export const Books = () => {
  const { data: books } = useStore(booksStore);

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Container>{books.length > 0 && books.map((book) => <BookItem key={book.id} book={book} />)}</Container>
  );
};
