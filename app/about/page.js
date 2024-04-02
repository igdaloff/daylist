import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Daylist | About</title>
        <meta name="description" content="About Day List" />
      </Head>
      <h1 className="text-3xl font-semibold">About this Project</h1>
      <p className="my-4">
        I (
        <a href="//igdaloff.com" className="underline transition sm:hover:text-sky-500">
          Nathan Igdaloff
        </a>
        ) built this little web app in 2022 to learn NextJS, and to encourage myself to both better
        organize my days and to journal. I was inspired by a similar app made by{' '}
        <a href="https://nathandorney.com/" className="underline transition sm:hover:text-sky-500">
          Nathan Dorney
        </a>
        .
      </p>
      <p className="my-4">
        The code is available to view on{' '}
        <a
          href="https://github.com/igdaloff/daylist"
          className="underline transition sm:hover:text-sky-500"
        >
          Github
        </a>
        .
      </p>
      <p>
        Ideas for improvement?{' '}
        <a
          href="mailto:louis.nathan@gmail.com"
          className="underline transition sm:hover:text-sky-500"
        >
          Let me know!
        </a>
      </p>
    </>
  );
}
