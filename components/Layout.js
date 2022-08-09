import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from 'react'

const Layout = ({ children }) => {

  const [theme, setTheme] = useState('lightMode');

  const toggleTheme = () => {
    setTheme(theme === 'lightMode' ? 'darkMode' : 'lightMode')    
  }

  return ( 
    <div className={theme}>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <main className="content">
        <div className="content-inner">
          { children }
        </div>
      </main>            
      <Footer />
    </div>
   );
}
 
export default Layout;