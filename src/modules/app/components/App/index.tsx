import { AppThemeProvider } from '@modules/app';
import { Pokedex } from '@modules/pokedex';
import { Container } from './styled';

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        <Pokedex />
      </Container>
    </AppThemeProvider>
  );
};
