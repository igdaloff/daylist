import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="absolute bottom-0 sm:left-16 w-full flex gap-1 justify-center pb-4 text-zinc-400">
      Made by
      <a className="transition-all hover:text-sky-500 underline" href="//igdaloff.com">
        Nathan Igdaloff
      </a>
      |
      <Link href="/about" className="transition-all hover:text-sky-500 underline">
        About
      </Link>
      |
      <a
        className="transition-all hover:text-sky-500 underline"
        href="mailto:louis.nathan@gmail.com"
      >
        Feedback
      </a>
    </footer>
  );
};

export default Footer;
