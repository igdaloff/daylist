import Link from 'next/link'

const Nav = (props) => {

  return ( 
    <nav>    
      <Link href="/"><a className="logo">DL</a></Link>      
      <Link href="/days">
        <a className="journal-nav-link"><span className="material-icons-outlined">menu_book</span>My Journal</a>
      </Link>
      <span className="themeToggle material-icons" onClick={props.toggleTheme}>{props.theme === 'lightMode' ? 'light_mode' : 'nightlight'}</span>
      {/* <Link href="/about"><a>About </a></Link> */}
    </nav>
   );
}
 
export default Nav;