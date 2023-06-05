'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

export const Themes = {
  LightTheme: 'light',
  DarkTheme: 'dark',
};

function useTheme(theme) {
  return {
    tailwindTheme: theme === 'dark' ? 'dark' : '',
    iconStyle: theme === 'dark' ? 'text-white' : '',
  };
}

export default function ThemeProvider({ children }) {
  const theme = useTheme(Themes.LightTheme);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}