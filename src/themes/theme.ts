import { black, green, grey, primary, red, white } from './colors';

export const themes = {
  default: {
    colors: {
      font: {
        brand: grey.brand,
        medium: grey.medium,
        light: grey.light,
        selected: primary.brand,
        dark: black.dark,
      },
      background: {
        brand: white.brand,
        light: white.off_white,
        off: white.dark,
      },
      tile: {
        green: green.brand,
        red: red.brand,
      },
      border: {
        brand: green.brand,
        medium: grey.medium,
        light: grey.light,
      },
      tint: '#2f95dc',
    },
    fonts: {
      weight: {
        light: '300',
        semi_light: '350',
        medium: '400',
        bold: '500',
        xbold: '700',
      },
      size: {
        small: '12px',
        medium: '14px',
        large: '16px',
        xlarge: '18px',
        xxlarge: '20px',
      },
    },
  },
};

export type ThemeInterface = typeof themes.default;
