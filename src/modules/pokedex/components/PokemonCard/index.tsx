import { isNil, pathOr } from 'remeda';
import { useEffectQuery } from '@modules/core/hooks';
import { getPokemon } from '@modules/pokedex/services';
import { DotsLoading } from '@modules/core/components';
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
  LoadingWrapper,
} from './styled';

type PokemonCardProps = {
  name: string;
  resourceUrl: string;
};

const normalizeId = (id: number): string => {
  const convertedId = `${id}`.padStart(3, '0');

  return `#${convertedId}`;
};

const normalizePoints = (points: number): number => {
  return points/10;
}

export const PokemonCard = ({ name, resourceUrl }: PokemonCardProps) => {
  const queryOptions = {
    queryName: `Get Pokemon ${name}`,
    queryFn: async () => getPokemon(resourceUrl),
  };
  const { isLoading, data: pokemon } = useEffectQuery(queryOptions);
  const pokemonTypes = pathOr<PokemonResponse | undefined, 'types'>(pokemon, ['types'], []);
  const pokemonAbilities = pathOr<PokemonResponse | undefined, 'abilities'>(pokemon, ['abilities'], []);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <DotsLoading message={`Loading ${name} information, just a moment...`} />
      </LoadingWrapper>
    );
  }

  if (isNil(pokemon)) {
    // TODO: Create a View to show the not found Pokemon
    return <h2>{`Pokemon "${name}" Not found`}</h2>;
  }

  return (
    <Card>
      <PokemonInfo>
        <PointInfo>{`Height: ${normalizePoints(pokemon.height)} m`}</PointInfo>
        <PictureWrapper>
          <img src={pokemon.sprites.other.dream_world.front_default} alt={`The ${name} pokemon`} />
        </PictureWrapper>
        <PointInfo>{`Weight: ${normalizePoints(pokemon.weight)} kg`}</PointInfo>
      </PokemonInfo>
      <Details>
        <Header>
          <Title>{pokemon.name}</Title>
          <PokemonId>{normalizeId(pokemon.id)}</PokemonId>
        </Header>
        <TypesSection>
          <SubTile>Types</SubTile>
          <ListWrapper>
            {pokemonTypes.map((pokemonType) => <Badge key={pokemonType.type.name} className={pokemonType.type.name}>{pokemonType.type.name}</Badge>)}
          </ListWrapper>
        </TypesSection>
        <DetailsSection>
          <SubTile>Abilities</SubTile>
          <ListWrapper>
            {pokemonAbilities.map((pokemonAbility) => <AbilityBadge key={pokemonAbility.ability.name}>{pokemonAbility.ability.name}</AbilityBadge>)}
          </ListWrapper>
        </DetailsSection>
      </Details>
    </Card>
  );
};
