import { isNil } from 'remeda';
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

export const PokemonCard = ({ name, resourceUrl }: PokemonCardProps) => {
  const queryOptions = {
    queryName: 'Get Pokemon',
    queryFn: async () => getPokemon(resourceUrl),
  };
  const { isLoading, data: pokemon } = useEffectQuery(queryOptions);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <DotsLoading message={`Loading ${name} information, just a moment...`} />
      </LoadingWrapper>
    );
  }

  if (isNil(pokemon)) {
    return <h2>{`Pokemon "${name}" Not found`}</h2>;
  }

  return (
    <Card>
      <PokemonInfo>
        <PointInfo>Height: 0.7 m</PointInfo>
        <PictureWrapper>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt={`The ${name} pokemon`}
          />
        </PictureWrapper>
        <PointInfo>Weight: 6.9 kg</PointInfo>
      </PokemonInfo>
      <Details>
        <Header>
          <Title>{name}</Title>
          <PokemonId>#001</PokemonId>
        </Header>
        <TypesSection>
          <SubTile>Types</SubTile>
          <ListWrapper>
            <Badge className="grass">grass</Badge>
            <Badge className="poison">poison</Badge>
          </ListWrapper>
        </TypesSection>
        <DetailsSection>
          <SubTile>Abilities</SubTile>
          <ListWrapper>
            <AbilityBadge>overgrow</AbilityBadge>
            <AbilityBadge>chlorophyll</AbilityBadge>
          </ListWrapper>
        </DetailsSection>
      </Details>
    </Card>
  );
};
