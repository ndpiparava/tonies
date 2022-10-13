/* eslint-disable @typescript-eslint/no-unsafe-call */
import create from 'zustand';

declare type MessageIds = FormatjsIntl.Message extends {
  ids: string;
}
  ? FormatjsIntl.Message['ids']
  : string;

export const Locales: {
  [key: string]: string;
} = {
  en: 'English',
  de: 'German',
};

export const messages: {
  [key: string]: Record<MessageIds, string>;
} = {
  en: {
    game: 'Game',
    settings: 'Settings',
    restart: 'Restart',
    startGame: 'Start Game',
    welcome: 'Welcome',
    language: 'Language',
    winMessage: 'won the game',
    draw: 'Draw',
  },
  de: {
    users: 'Benutzer',
    restart: 'Neu starten',
    game: 'Spiel',
    draw: 'Zeichnen',
    startGame: 'Spiel beginnen',
    welcome: 'Herzlich willkommen',
    winMessage: 'Das Spiel gewonnen',
    settings: 'Einstellungen',
    language: 'Sprache',
  },
};

const initialLocale = {
  language: 'en',
};

export const useLocaleStore = create((set: any) => ({
  ...initialLocale,
  setLanguage: (language: string) => {
    set({ language });
  },
}));
