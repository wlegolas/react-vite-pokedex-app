import styled from 'styled-components';

export const Badge = styled.span`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
  border: none;
  color: ${(props) => props.theme.colors.black};
  display: inline-block;
  padding: 0.125rem 0.75rem;
  white-space: nowrap;
`;

export const Card = styled.li`
  background-color: ${(props) => props.theme.colors.white};
  background: linear-gradient(${(props) => props.theme.colors.gray80}, ${(props) => props.theme.colors.white});
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  display: flex;
`;

export const LoadingWrapper = styled(Card)`
  background: linear-gradient(#92bca6, #a2ccb6);
  padding: 0.125rem 0.75rem;
`;

export const LoadingMessage = styled.h3`
  font-size: 1.25rem;
`;

export const PointInfo = styled(Badge)`
  border: none;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: ${(props) => props.theme.fontWeightBold};
  background: rgba(0, 0, 0, 0.15);
`;

export const PokemonInfo = styled.div`
  background: linear-gradient(#de685e, ${(props) => props.theme.colors.flamingo});
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 100%;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 10%;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0, 0, 0, 0.025);
  }
`;

export const PictureWrapper = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85px;
    height: 85px;
  }
`;

export const Details = styled.div`
  flex: 1;
  height: 100%;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.header`
  margin-bottom: 1rem;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.5rem;
`;

export const SubTile = styled.h3`
  margin-bottom: 0;
  text-align: center;
  font-size: 1.25rem;
`;

export const PokemonId = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeightBold};
  background-color: ${(props) => props.theme.colors.flamingo};
  border-radius: 6px;
  padding: 0.2rem;
`;

export const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 0.8rem 0;
`;

export const TypesSection = styled(DetailsSection)`
  background-color: rgba(0, 0, 0, 0.025);

  .grass {
    background-color: ${(props) => props.theme.colors.grass};
  }

  .poison {
    background-color: ${(props) => props.theme.colors.poison};
  }

  .fire {
    background-color: ${(props) => props.theme.colors.fire};
  }

  .water {
    background-color: ${(props) => props.theme.colors.water};
  }

  .bug {
    background-color: ${(props) => props.theme.colors.bug};
  }

  .flying {
    background-color: ${(props) => props.theme.colors.flying};
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.flying} 50%,
      ${(props) => props.theme.colors.flyingLight} 50%
    );
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 30px;
`;

export const AbilityBadge = styled(Badge)`
  border: 1px solid ${(props) => props.theme.colors.flamingo};
`;
