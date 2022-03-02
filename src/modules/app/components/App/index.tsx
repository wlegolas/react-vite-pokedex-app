import { AppThemeProvider, Header } from '@modules/app';
import { Pokedex } from '@modules/pokedex';
import { Container, Content } from './styled';

export const App = () => {
  return (
    <AppThemeProvider>
      <Container>
        <Header />
        <Content>
          <Pokedex />
        </Content>
      </Container>
    </AppThemeProvider>
  );
};
