import { Container, Navigator, Menu, MenuItem, UserInfo, LogoCotainer, Title, SubTitle } from './styled';

export const Header = () => (
  <Container>
    <LogoCotainer>
      <Title>Pokedex</Title>
      <SubTitle>- See the Pokemon information</SubTitle>
    </LogoCotainer>
    <Navigator>
      <Menu>
        <MenuItem>
          <a href="#">Home</a>
        </MenuItem>
        <MenuItem>
          <UserInfo aria-label="The user name initials">WO</UserInfo>
        </MenuItem>
      </Menu>
    </Navigator>
  </Container>
);
