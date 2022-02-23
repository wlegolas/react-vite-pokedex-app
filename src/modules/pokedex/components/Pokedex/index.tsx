import { PokemonCard } from '@modules/pokedex';
import { Container } from './styled';
import { loadPokemons } from '@modules/pokedex/services';
import { useEffectQuery } from '@modules/core/hooks';

export const Pokedex = () => {
  const queryOptions = {
    queryName: 'Load Pokemons',
    queryFn: loadPokemons,
  };
  const { isLoading, data: pokemons = [] } = useEffectQuery(queryOptions);

  if (isLoading) {
    return <h1>Loading pokemons, just a moment...</h1>;
  }

  return (
    <Container>
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} resourceUrl={pokemon.url} />)}
    </Container>
  );
};
