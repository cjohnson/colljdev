'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const themeContext = {
    theme: 'dark',
    tailwindTheme: 'dark',
    iconTheme: 'ffffff',
  };

  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
}