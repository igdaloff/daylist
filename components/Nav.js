import Link from 'next/link'

const Nav = () => {
  return ( 
    <nav>    
      <Link href="/"><a className="logo">DL</a></Link>      
      <Link href="/days">
        <a className="journal-nav-link"><span className="material-icons-outlined">menu_book</span>My Journal</a>
      </Link>

      {/* <Link href="/about"><a>About </a></Link> */}
    </nav>
   );
}
 
export default Nav;