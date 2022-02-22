import api from '@modules/core/services/api';

const BASE_URL = 'https://pokeapi.co/api/v2';
const PAGE_SIZE = 6;
const CURRENT_PAGE = 0;

export const loadPokemons = async (): Promise<Array<LoadPokemonResponse>> => {
  const url = `${BASE_URL}/pokemon?limit=${PAGE_SIZE}&offset=${CURRENT_PAGE}`;
  const result = await api.getData<Array<LoadPokemonResponse>>(url);

  console.log('==> loadPokemons', result)

  return result ?? [];
};
