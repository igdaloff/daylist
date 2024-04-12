import React, { useContext } from 'react';
import Link from 'next/link';
import ThemeProvider, { ThemeContextProps } from '../contexts/theme-provider';

export default function Nav() {
  const { theme, toggleTheme }: ThemeContextProps = useContext(ThemeProvider);

  return (
    <nav
      className="flex items-center justify-between py-2 z-10 mx-4 sm:mx-0 
                sm:fixed sm:w-[calc(100vh-2rem)] sm:h-16 sm:top-0 sm:transform sm:rotate-270 sm:translate-y-[100vh] sm:origin-top-left sm:flex-row-reverse"
    >
      <Link
        href="/"
        className="flex justify-center text-sm font-black border border-zinc-800 rounded-full text-center size-10
        sm:hover:bg-sky-500 sm:hover:text-white sm:hover:border-sky-500
        sm:rotate-90 duration-200"
      >
        <span className="self-center">DL</span>
      </Link>
      <Link
        href="/journal"
        className="journal-nav-link uppercase text-sm text-center self-center  sm:hover:text-sky-500 sm:duration-200"
      >
        <span className="material-icons-outlined align-middle pr-2 -mt-1">menu_book</span>My Journal
      </Link>
      <span
        className="material-icons sm:pb-16 cursor-pointer transform rotate-0 sm:rotate-90 sm:hover:text-sky-500 sm:duration-200"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'nightlight' : 'light_mode'}
      </span>
    </nav>
  );
}
