export default function PlanHeader() {
  // Get today's date
  const d: Date = new Date();
  const days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date: string = String(d.getDate()).padStart(2, '0');
  const year: number = d.getFullYear();
  const today: string = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + date + ', ' + year;

  return (
    <header>
      <h1 className="font-semibold text-3xl">What do you want to do today?</h1>
      <h2 className="mt-1 mb-4 font-light text-xl">{today}</h2>
    </header>
  );
}
