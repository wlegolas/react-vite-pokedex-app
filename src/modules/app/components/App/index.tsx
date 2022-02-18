import { Books } from '@modules/books';
import { AppThemeProvider } from '@modules/app';
import { Container } from './styled';

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        <Books />
      </Container>
    </AppThemeProvider>
  );
};
