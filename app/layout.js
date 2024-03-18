'use client';

import { useState } from 'react';
import ThemeContext from './contexts/theme-provider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/index.scss';

function Layout({ children }) {
  const [theme, setTheme] = useState('lightMode');

  const toggleTheme = () => {
    setTheme(theme === 'lightMode' ? 'darkMode' : 'lightMode');
  };

  return (
    <html lang="en">
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
      <body className={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Nav />
          <main className="content">
            <div className="content-inner">{children}</div>
          </main>
          <Footer />
        </ThemeContext.Provider>
      </body>
    </html>
  );
}

export default Layout;
