import Head from 'next/head'
import PlanHeader from '../components/PlanHeader'
import PlanList from '../components/PlanList'
import styles from '../styles/Plan.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daylist | Home</title>
        <meta name="description" content="" />
      </Head>      
      <main className={styles.planContainer}>                     
        <PlanHeader />
        <PlanList />
      </main>
    </>
  )
}