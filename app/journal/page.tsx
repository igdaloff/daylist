import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daylist | My Journal',
  description: 'My Daylist journal.',
};

const Journal = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-semibold">My Journal</h1>
        <p className="my-4">Feature coming soon!</p>
      </header>
    </div>
  );
};

export default Journal;
