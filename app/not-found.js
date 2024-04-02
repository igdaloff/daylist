import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{' '}
        <Link href="/" className="underline hover:text-sky-500 transition">
          homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
