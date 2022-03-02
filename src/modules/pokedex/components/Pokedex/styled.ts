import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  grid-auto-rows: minmax(18rem, 1fr);
  align-items: stretch;
`;

export const LoadingMessage = styled.h2`
  font-size: 1.5rem;
`;
