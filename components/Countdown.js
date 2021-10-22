import { useState, useEffect } from "react";

const Countdown = () => {
  const [launchTime, setlaunchTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2021-10-25T01:00:00.000+00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setlaunchTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:-mt-32 -mt-20">
      {launchTime ? (
        <> </>
      ) : (
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mr-2 md:mr-4 border-2 md:border-4 border-white w-24 md:w-32 h-24 md:h-32 items-center justify-center rounded-full">
            <span className="text-white text-3xl md:text-5xl font-Raleway font-extrabold">
              {days}
            </span>
            <span className="text-white text-xs md:text-base font-Raleway ">
              DAYS
            </span>
          </div>
          <div className="flex flex-col mr-2 md:mr-4 border-2 md:border-4 border-white w-24 md:w-32 h-24 md:h-32 items-center justify-center rounded-full">
            <span className="text-white text-3xl md:text-5xl font-Raleway font-extrabold">
              {hours}
            </span>
            <span className="text-white text-xs md:text-base font-Raleway ">
              HOURS
            </span>
          </div>
          <div className="flex flex-col mr-2 md:mr-4 border-2 md:border-4 border-white w-24 md:w-32 h-24 md:h-32 items-center justify-center rounded-full  ">
            <span className="text-white text-3xl md:text-5xl font-Raleway font-extrabold">
              {minutes}
            </span>
            <span className="text-white text-xs md:text-base font-Raleway ">
              MINUTES
            </span>
          </div>
          <div className="flex flex-col mr-2 md:mr-4 border-2 md:border-4 border-white w-24 md:w-32 h-24 md:h-32 items-center justify-center rounded-full  ">
            <span className="text-white text-3xl md:text-5xl font-Raleway font-extrabold">
              {seconds}
            </span>
            <span className="text-white text-xs md:text-base font-Raleway ">
              SECONDS
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
