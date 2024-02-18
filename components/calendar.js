export default function Calendar({ month, day }) {
  return (
    <div className="bg-light-pink border-dark-pink my-4 w-40 rounded-3xl border-2 p-2 font-black">
      <div className="text-dark-pink text-center text-xl uppercase md:text-lg">
        {month}
      </div>
      <div className="bg-dark-pink h-24 rounded-b-2xl text-center text-7xl leading-tight text-white">
        {day}
      </div>
    </div>
  );
}
