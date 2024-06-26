'use client';

import { useState } from 'react';
import ThemeContext from './contexts/theme-provider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/index.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <html lang="en" className="max-sm:text-[90%]">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`relative bg-zinc-100 font-sans text-zinc-800 ${theme} leading-tight min-h-screen`}
      >
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Nav />
          <main
            className="
            sm:min-h-screen sm:mt-8 sm:ml-16 sm:mr-0 sm:mb-0 sm:rounded-none sm:rounded-tl-lg 
              sm:p-20 py-16 px-8 bg-white rounded-lg mx-4 mb-4 shadow-[0px_0px_13px_8px_rgba(158,158,158,0.2)] transition duration-300
              dark:bg-zinc-800 dark:text-white 
            "
          >
            <div className="pb-20 max-w-xl">{children}</div>
          </main>
          <Footer />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}

export default Layout;
