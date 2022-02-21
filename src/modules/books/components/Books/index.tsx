import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { booksStore, loadBooks } from '@modules/books';
import {
  Container,
  BookCard,
  BookPricture,
  BookCardContent,
  BookCardHeading,
  BookCardDescription,
  BookCardButton,
} from './styled';

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => (
  <BookCard>
    <BookPricture src={book.image_url} alt={`Cover about the book: ${book.title}`} />
    <BookCardContent>
      <BookCardHeading>{book.title}</BookCardHeading>
      <BookCardDescription>{book.description}</BookCardDescription>
      <BookCardButton>
        See more <span>→</span>
      </BookCardButton>
    </BookCardContent>
  </BookCard>
);

export const Books = () => {
  const { data: books } = useStore(booksStore);

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <section>
      <h2>Book List</h2>
      <Container>{books.length > 0 && books.map((book) => <BookItem key={book.id} book={book} />)}</Container>
    </section>
  );
};
