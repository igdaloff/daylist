import React, { useContext } from 'react';
import Link from 'next/link';
import ThemeProvider from '../contexts/theme-provider';

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeProvider);

  return (
    <nav>
      <Link href="/" className="logo">
        DL
      </Link>
      <Link href="/journal" className="journal-nav-link">
        <span className="material-icons-outlined">menu_book</span>My Journal
      </Link>
      <span className="themeToggle material-icons" onClick={toggleTheme}>
        {theme === 'lightMode' ? 'nightlight' : 'light_mode'}
      </span>
    </nav>
  );
}
