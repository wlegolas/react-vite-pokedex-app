import api from '@modules/core/services/api';

export const getPokemon = async (resourceUrl: string): Promise<PokemonResponse | undefined> => {
  return api.getData<PokemonResponse>(resourceUrl);
};
