import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.indigoLighter};
  min-height: 100vh;
  min-width: 100vw;
  font-family: ${(props) => props.theme.fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
`;
