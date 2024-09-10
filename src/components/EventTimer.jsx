import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("2024-10-24T00:00:00"); // Event start date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = eventDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] ) {
      return null;
    }
    return (
      <div key={interval} className="flex flex-col items-center mx-4">
        <span className="text-5xl font-extrabold text-black sm:text-7xl lg:text-8xl bg-white opacity-90 rounded-xl p-2">
          {timeLeft[interval]}
        </span>
        <span className="text-lg font-bold uppercase  sm:text-xl text-blue-950">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className=" relative bottom-5 sm:bottom-16  opacity-65 rounded-xl w-full py-12 px-6 md:px-20 lg:px-32 text-center flex flex-col items-center justify-center space-y-8">
      <h1 className="text-xl font-bold text-gray-950 md:text-2xl lg:text-3xl drop-shadow-lg">
        See you at 24 - 27 October!
      </h1>
      <div className="flex justify-center space-x-8">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="text-xl md:text-2xl lg:text-2xl font-semibold text-green-200">
            Event Started!
          </span>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
