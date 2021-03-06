import { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

type AppThemeProviderProps = {
  children: ReactNode;
};

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
  }

  :root {
    --z-index-fixed-header: 4;
    --header-height: 4rem;
    --global-spacing: 1rem;
    --spacing-horizontal: 1.25rem;
    --spacing-vertical: 0.75rem;
  }

  html {
    box-sizing: border-box;
    font-size: ${(props) => props.theme.baseFontSize};
  }

  body{
    background-color: ${(props) => props.theme.colors.bodyBg}
    font-family: ${(props) => props.theme.fontFamily};
    list-style-type: none;
    line-height: 1.65;
  }
`;

const colors = {
  black: '#0d0d0d',
  blue: '#0a4870',
  bodyBg: '#fceeb5;',
  bug: '#729f3f',
  fire: '#fd7d24',
  flamingo: '#ee786e',
  flying: '#3dc7ef',
  flyingLight: '#bdb9b8',
  grass: '#9bcc50',
  grassLight: '#b4e965',
  indigoLighter: '#7ca1ec',
  gray80: '#f8f8f8',
  poison: '#b97fc9',
  water: '#4592c4',
  white: '#ffffff',
};

const theme = {
  baseFontSize: '16px',
  fontFamily: 'Abel, Arial, Verdana, sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightSemibold: 500,
  fontWeightBold: 700,
  colors,
};


export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
