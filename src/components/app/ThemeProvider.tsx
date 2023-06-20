'use client';

import React, { MouseEventHandler } from 'react';

import { createContext, useState } from 'react';

interface Theme {
  tailwindTheme: string,
  iconStyle: string,
  theme: string,
  swapTheme: MouseEventHandler<HTMLButtonElement>,
}

export const ThemeContext = createContext<Theme>({
  tailwindTheme: '',
  iconStyle: '',
  theme: '',
  swapTheme: undefined,
});

export const Themes = {
  LightTheme: 'light',
  DarkTheme: 'dark',
};

export default function ThemeProvider({ children }: { children: JSX.Element[] }) {
  const [theme, setTheme] = useState(Themes.LightTheme);

  const themeBody: Theme = {
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