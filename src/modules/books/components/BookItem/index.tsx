import { Container, Cover, BookPricture, Content, Title, Description, Button, InfoSection, InfoSectionLabel } from './styled';

type BookItemProps = {
  book: Book;
};

export const BookItem = ({ book }: BookItemProps) => (
  <Container>
    <Cover>
      <BookPricture src={book.image_url} alt={`Cover about the book: ${book.title}`} />
    </Cover>
    <Content>
      <Title>{book.title}</Title>
      <InfoSection>
        <InfoSectionLabel>Authors:</InfoSectionLabel>
        {book.authors}
      </InfoSection>
      <InfoSection>
        <InfoSectionLabel>Description:</InfoSectionLabel>
        <Description>{book.description}</Description>
      </InfoSection>
      <Button>
        See more <span>→</span>
      </Button>
    </Content>
  </Container>
);
