import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: string;
    fontFamily: string;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMiddle: number;
    fontWeightBold: number;
    colors: {
      black: string;
      blue: string;
      indigoLighter: string;
      white: string;
    };
  }
}
