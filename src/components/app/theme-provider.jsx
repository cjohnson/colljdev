'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children, themeContext }) {
  return <ThemeContext.Provider value={themeContext} >{children}</ThemeContext.Provider>
}