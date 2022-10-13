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
  language: 'de',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLocaleStore = create((set: any) => ({
  ...initialLocale,
  setLanguage: (language: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    set({ language });
  },
}));
