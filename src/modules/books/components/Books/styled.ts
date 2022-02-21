import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  width: 114rem;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(62rem, 1fr));
  align-items: stretch;
`;
