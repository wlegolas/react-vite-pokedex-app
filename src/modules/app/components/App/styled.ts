import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  padding: var(--spacing-vertical) var(--spacing-horizontal);
  margin-top: var(--header-height);
`;
