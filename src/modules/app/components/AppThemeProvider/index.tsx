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
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.baseFontSize};
    list-style-type: none;
  }
`;

const theme = {
  baseFontSize: '16px',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif;',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  colors: {
    black: '#000000',
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
