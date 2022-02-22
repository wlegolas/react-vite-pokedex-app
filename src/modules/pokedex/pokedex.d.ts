type PokemonResponse = {
  name: string,
  url: string,
};

type PokemonsResponse = {
  count: number;
  results: Array<PokemonResponse>;
};
