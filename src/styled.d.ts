import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: string;
    fontFamily: string;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightBold: number;
    colors: {
      black: string;
      indigoLighter: string;
      white: string;
    };
  }
}
