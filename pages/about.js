import Head from 'next/head'

export default function About() {
  return ( 
    <>
      <Head>
        <title>Daylist | About</title>
        <meta name="description" content="About Day List" />
      </Head> 
      <h1>About this Project</h1>
      <p><a href="//igdaloff.com">Nathan Igdaloff</a> built this little web app in 2022 to learn NextJS, and to encourage him to both better organize his days and to journal. It was inspired by a similar app by <a href="https://nathandorney.com/">Nathan Dorney</a>.</p>
      <p>The code is available to view on <a href="https://github.com/igdaloff/daylist">Github</a>.</p>
      <p>Ideas for improvement? <a href="mailto:louis.nathan@gmail.com">Let him know!</a></p>
    </>
  )
}