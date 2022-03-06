import styled from 'styled-components';

export const Container = styled.header`
  background-color: #e16c62;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  height: var(--header-height);
  z-index: var(--z-index-fixed-header);
  padding: var(--spacing-vertical) var(--spacing-horizontal);
  color: white;
`;

export const LogoCotainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const SubTitle = styled.span`
  font-size: 1.5rem;
`;

export const Navigator = styled.nav`
  height: 100%;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuItem = styled.li`
  a {
    color: ${(props) => props.theme.colors.white};
    padding: calc(var(--global-spacing)*0.5) var(--global-spacing)
  }
`;

export const UserInfo = styled.span`
  background-color: ${(props) => props.theme.colors.grassLight};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeightBold};
  padding: calc(var(--global-spacing) * 0.5);
  border: 0;
  border-radius: 500%;
`;
