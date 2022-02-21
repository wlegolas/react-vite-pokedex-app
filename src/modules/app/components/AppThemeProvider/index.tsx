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

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body{
    background-color: ${(props) => props.theme.colors.bodyBg}
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.baseFontSize};
    list-style-type: none;
  }
`;

const theme = {
  baseFontSize: '16px',
  fontFamily: 'Abel, Arial, Verdana, sans-serif',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMiddle: 500,
  fontWeightBold: 700,
  colors: {
    black: '#0d0d0d',
    blue: '#0a4870',
    bodyBg: '#fceeb5;',
    indigoLighter: '#7ca1ec',
    white: '#ffffff',
  },
};

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
