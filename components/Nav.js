import Link from 'next/link'

const Nav = (props) => {

  return ( 
    <nav>    
      <Link href="/"><a className="logo">DL</a></Link>      
      <Link href="/journal">
        <a className="journal-nav-link"><span className="material-icons-outlined">menu_book</span>My Journal</a>
      </Link>
      <span className="themeToggle material-icons" onClick={props.toggleTheme}>{props.theme === 'lightMode' ? 'nightlight' : 'light_mode'}</span>      
    </nav>
   );
}
 
export default Nav;