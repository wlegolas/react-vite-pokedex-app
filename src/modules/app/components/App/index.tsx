import { AppThemeProvider } from '@modules/app';
// import { Books } from '@modules/books';
import { Pokemons } from '@modules/pokemons';
import { Container } from './styled';

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        {/* <Books /> */}
        <Pokemons />
      </Container>
    </AppThemeProvider>
  );
};
