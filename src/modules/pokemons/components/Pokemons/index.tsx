import { Card, PokemonInfo, Details, Header, Title, PokemonId, DetailsContent, PokemonType, SubTile, TypeList } from './styled';

export const Pokemons = () => (
  <Card>
    <PokemonInfo>
      <div className="level center">Height: 0.7 m</div>
      <div className="picture-container">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt=""
        />
      </div>
      <div className="points center">weight: 6.9 kg</div>
    </PokemonInfo>
    <Details>
      <Header>
        <Title>bulbasaur</Title>
        <PokemonId>#001</PokemonId>
      </Header>
      <DetailsContent>
        <SubTile>Types</SubTile>
        <TypeList>
          <PokemonType className="grass">grass</PokemonType>
          <PokemonType className="poison">poison</PokemonType>
          <PokemonType className="flying">flying</PokemonType>
        </TypeList>
      </DetailsContent>
    </Details>
  </Card>
);
