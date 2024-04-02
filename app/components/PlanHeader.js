export default function PlanHeader() {
  // Get today's date
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
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
  const date = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  const today = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + date + ', ' + year;

  return (
    <header>
      <h1 className="font-semibold text-2xl">What do you want to do today?</h1>
      <h2 className="mt-2 mb-4 font-light">{today}</h2>
    </header>
  );
}
