import Nav from "./Nav";
import { useState } from 'react'

const Layout = ({ children }) => {

  const [theme, setTheme] = useState('lightMode');

  const toggleTheme = () => {
    setTheme(theme === 'lightMode' ? 'darkMode' : 'lightMode')    
  }

  return ( 
    <div className={`theme ${theme}`}>
      <Nav toggleTheme={toggleTheme} theme={theme} />
      <div className="content">
        <div className="content-inner">
          { children }
        </div>      
      </div>
    </div>
   );
}
 
export default Layout;