import styled from 'styled-components';

export const Card = styled.div`
  width: 450px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
  display: flex;
`;

// export const Info = styled.div`
//   position: absolute;
//   width: 150px;
//   height: 100%;
//   background: linear-gradient(#de685e, #ee786e);
//   transition: width 0.4s;
//   overflow: hidden;
//   z-index: 2;
// `;

export const PokemonInfo = styled.div`
  background: linear-gradient(#de685e, #ee786e);
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

  .level,
  .points {
    top: 15%;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.15);
    padding: 0.125rem 0.75rem;
    border-radius: 100px;
    white-space: nowrap;
  }

  .picture-container {
    border-radius: 50%;
    background-color: white;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 85px;
    height: 85px;
  }
`;

export const Details = styled.div`
  flex: 1;
  height: 100%;
  padding: 1rem;
  padding-top: 0;
`;

export const Header = styled.header`
  margin-bottom: 1rem;
  position: relative;
`;

export const Title = styled.h1`
  margin-bottom: 0;
  text-align: center;
`;

export const SubTile = styled.h2`
  margin-bottom: 0;
  text-align: center;
`;

export const PokemonId = styled.span`
  position: absolute;
  top: 12px;
  right: 0;
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 0.8rem 0;
  border-top: 2px solid rgba(0, 0, 0, 0.025);
  border-bottom: 2px solid rgba(0, 0, 0, 0.025);
`;

export const TypeList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .grass {
    background-color: #9bcc50;
  }

  .poison {
    background-color: #b97fc9;
  }

  .fire {
    background-color: #fd7d24;
  }

  .water {
    background-color: #4592c4;
  }

  .bug {
    background-color: #729f3f;
  }

  .flying {
    background-color: #3dc7ef;
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  }
`;

export const PokemonType = styled.span`
  background-color: red;
  border-radius: 4px;
  color: white;
  display: inline-block;
  padding: 0.2rem 0.6rem;
`;
