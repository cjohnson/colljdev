'use client';

import React, { MouseEventHandler } from 'react';

import { createContext, useState } from 'react';

interface ITheme {
  tailwindTheme: string,
  iconStyle: string,
  theme: string,
  swapTheme: MouseEventHandler<HTMLButtonElement>,
}

export const ThemeContext = createContext<ITheme>({
  tailwindTheme: '',
  iconStyle: '',
  theme: '',
  swapTheme: undefined,
});

export const Themes = {
  LightTheme: 'light',
  DarkTheme: 'dark',
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Themes.LightTheme);

  const themeBody: ITheme = {
    tailwindTheme: theme === 'dark' ? 'dark' : '',
    iconStyle: theme === 'dark' ? 'text-white' : '',
    theme: theme,
    swapTheme: () => {
      if (theme === Themes.DarkTheme) {
        setTheme(Themes.LightTheme);
        return;
      }

      setTheme(Themes.DarkTheme);
    }
  };

  return <ThemeContext.Provider value={themeBody}>{children}</ThemeContext.Provider>;
}