import React, { useEffect, useState } from "react";

const images = [
  "https://growupp.in/MAIN/growupp_official/assets/img/Dictionary-pana.png",
  "https://growupp.in/MAIN/growupp_official/assets/img/Nerd-amico.png",
  "https://growupp.in/MAIN/growupp_official/assets/img/Knowledge-pana.png",
];

const Description = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);
  const image = images[count % images.length];

  return (
    <div className="flex mx-28 text-[#4A2A51]">
      <div className="w-3/5 px-6 pr-14 pt-24">
        <h2 className="text-5xl font-bold mb-6">
          We Create Results So You Focus On The Process.
        </h2>
        <p className="text-lg w-3/4">
          Start today with Growupp. We provide students with optimum and best
          result seeking strategies.
        </p>
      </div>
      <div className="">
        <img className="h-[25rem] mt-[-3rem]" src={image} alt="dictionary" />
      </div>
    </div>
  );
};

export default Description;
