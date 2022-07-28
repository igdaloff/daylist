import Head from 'next/head'
import PlanHeader from '../components/PlanHeader'
import PlanList from '../components/PlanList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daylist | Home</title>
        <meta name="description" content="" />
      </Head>
      <div>                
        <PlanHeader />
        <PlanList />
      </div>
    </>
  )
}