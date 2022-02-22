import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  width: 114rem;
  grid-gap: 3.5rem;
  grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
  align-items: stretch;
`;
