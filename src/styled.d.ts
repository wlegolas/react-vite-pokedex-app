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
      bodyBg: string;
      bug: string;
      indigoLighter: string;
      fire: string;
      flamingo: string;
      flying: string;
      flyingLight: string;
      grass: string;
      gray80: string;
      poison: string;
      water: string;
      white: string;
    };
  }
}
