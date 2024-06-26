import type { Metadata } from 'next';
import PlanHeader from './components/PlanHeader';
import PlanList from './components/PlanList';

export const metadata: Metadata = {
  title: 'Daylist | Home',
  description: 'Create a daily todo list and keep a journal in one place',
  keywords: ['journal', 'todo', 'organization', 'productivity', 'planner', 'daily', 'list'],
};

export default function Home() {
  return (
    <>
      <PlanHeader />
      <PlanList />
    </>
  );
}
