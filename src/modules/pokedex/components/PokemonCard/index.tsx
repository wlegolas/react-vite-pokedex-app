import {
  Card,
  PokemonInfo,
  Details,
  Header,
  Title,
  PokemonId,
  DetailsSection,
  TypesSection,
  AbilityBadge,
  SubTile,
  ListWrapper,
  Badge,
  PointInfo,
  PictureWrapper,
} from './styled';

export const PokemonCard = () => (
  <Card>
    <PokemonInfo>
      <PointInfo>Height: 0.7 m</PointInfo>
      <PictureWrapper>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="The bulbasaur pokemon"
        />
      </PictureWrapper>
      <PointInfo>Weight: 6.9 kg</PointInfo>
    </PokemonInfo>
    <Details>
      <Header>
        <Title>bulbasaur</Title>
        <PokemonId>#001</PokemonId>
      </Header>
      <TypesSection>
        <SubTile>Types</SubTile>
        <ListWrapper>
          <Badge className="grass">grass</Badge>
          <Badge className="poison">poison</Badge>
        </ListWrapper>
      </TypesSection>
      <DetailsSection>
        <SubTile>Abilities</SubTile>
        <ListWrapper>
          <AbilityBadge>overgrow</AbilityBadge>
          <AbilityBadge>chlorophyll</AbilityBadge>
        </ListWrapper>
      </DetailsSection>
    </Details>
  </Card>
);
