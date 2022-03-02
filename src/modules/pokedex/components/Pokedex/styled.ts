import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  width: 100%;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  align-items: stretch;
`;
