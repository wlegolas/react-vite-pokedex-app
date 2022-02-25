import { isNil } from 'remeda';
import api from '@modules/core/services/api';

const BASE_URL = 'https://pokeapi.co/api/v2';
const PAGE_SIZE = 4;
const CURRENT_PAGE = 0;

export const loadPokemons = async (): Promise<Array<NamedResourceResponse>> => {
  const url = `${BASE_URL}/pokemon?limit=${PAGE_SIZE}&offset=${CURRENT_PAGE}`;
  const response = await api.getData<PokemonResourcesResponse>(url);

  return isNil(response) ? [] : response.results;
};
