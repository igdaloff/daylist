'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'lightMode',
  toggleTheme: () => {},
});

export default ThemeContext;
