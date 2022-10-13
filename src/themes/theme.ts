import { black, grey, primary, white } from './colors';

type keyValue = {
  [key: string]: string;
};
type colorsType = {
  font: keyValue;
  background: keyValue;
  border: keyValue;
  tile: keyValue;
  tint: string;
};

type fontsType = {
  size: keyValue;
  weight: keyValue;
};

type themeInterface = {
  [key: string]: {
    colors: colorsType;
    fonts: fontsType;
  };
};

const themes: themeInterface = {
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
        brand: grey.brand,
        label: grey.dark,
      },
      border: {
        brand: grey.brand,
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

export default themes;
