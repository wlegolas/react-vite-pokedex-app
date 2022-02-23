type NamedResourceResponse = {
  name: string;
  url: string;
};

type PokemonResourcesResponse = {
  count: number;
  results: Array<NamedResourceResponse>;
};

type PokemonAbilityResponse = {
  ability: NamedResourceResponse;
};

type PokemonSpriteResourceResponse = {
  front_default: string;
};

type PokemonSpriteResponse = {
  other: {
    dream_world: PokemonSpriteResourceResponse;
  };
};

type PokemonTypeResponse = {
  type: NamedResourceResponse;
};

type PokemonResponse = {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  abilities: Array<PokemonAbilityResponse>;
  sprites: PokemonSpriteResponse;
  types: Array<PokemonTypeResponse>;
};
