'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const Themes = {
  LightTheme: 'light',
  DarkTheme: 'dark',
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Themes.LightTheme);

  const themeBody = {
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