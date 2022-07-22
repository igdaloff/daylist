import Head from 'next/head'
import Plan from '../components/Plan'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daylist | Home</title>
        <meta name="description" content="" />
      </Head>
      <div>                
        <Plan />
      </div>
    </>
  )
}