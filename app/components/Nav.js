import Link from 'next/link';

const Nav = (props) => {
  return (
    <nav>
      <Link href="/" className="logo">
        DL
      </Link>
      <Link href="/journal" className="journal-nav-link">
        <span className="material-icons-outlined">menu_book</span>My Journal
      </Link>
      <span className="themeToggle material-icons" onClick={props.toggleTheme}>
        {props.theme === 'lightMode' ? 'nightlight' : 'light_mode'}
      </span>
    </nav>
  );
};

export default Nav;
