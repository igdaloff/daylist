import Link from 'next/link'

const Nav = () => {
  return ( 
    <nav>
      <div className="logo">
      <Link href="/"><a><strong>DL</strong></a></Link>
      </div>      
      <Link href="/days"><a>Previous Days</a></Link>
      <Link href="/about"><a>About </a></Link>
    </nav>
   );
}
 
export default Nav;