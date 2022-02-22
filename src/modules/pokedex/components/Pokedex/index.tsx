import { PokemonCard } from '@modules/pokedex';
import { Container } from './styled';

export const Pokedex = () => {
  const pokemons = [
    {
      id: '001'
    },
    {
      id: '002'
    },
    {
      id: '003'
    }
  ];

  return <Container>{pokemons.length > 0 && pokemons.map((pokemon) => <PokemonCard key={pokemon.id} />)}</Container>;
};
