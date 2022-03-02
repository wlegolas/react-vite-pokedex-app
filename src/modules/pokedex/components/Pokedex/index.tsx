import { PokemonCard } from '@modules/pokedex';
import { loadPokemons } from '@modules/pokedex/services';
import { useEffectQuery, DotsLoading } from '@modules/core';
import { Container, LoadingMessage } from './styled';

export const Pokedex = () => {
  const queryOptions = {
    queryName: 'Load Pokemons',
    queryFn: loadPokemons,
  };
  const { isLoading, data: pokemons = [] } = useEffectQuery(queryOptions);

  if (isLoading) {
    return (
      <Container>
        <DotsLoading>
          <LoadingMessage>Loading pokemons, just a moment...</LoadingMessage>
        </DotsLoading>
      </Container>
    );
  }

  return (
    <Container>
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} resourceUrl={pokemon.url} />)}
    </Container>
  );
};
