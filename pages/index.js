import Head from 'next/head';
import PlanHeader from '../components/PlanHeader';
import PlanList from '../components/PlanList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Daylist | Home</title>
        <meta
          name="description"
          content="Create a daily todo list and keep a journal in one place."
        />
      </Head>
      <PlanHeader />
      <PlanList />
    </>
  );
}
