'use client';

import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/index.scss';

function Layout({ children, pageProps }) {
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
      <body>
        <Nav toggleTheme={toggleTheme} theme={theme} />
        <main className="content">
          <div className="content-inner">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
