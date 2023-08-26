import React from "react";

const Title = () => {
  return (
    <div className="text-[#4A2A51] w-2/4 mx-auto text-center my-5">
      <h1 className="text-5xl font-bold mb-5">GROW WITH GROWUPP</h1>
      <h3 className="text-base bg-[#69666640] text-black my-4 mx-48 rounded-2xl">
        An expert coach for your future ambitions
      </h3>
      <button className="bg-[#4A2A51] py-1 px-4 rounded-xl text-white text-lg hover:bg-[#774482]">
        Start <i className="fa-solid fa-circle-play text-orange-500 ml-4"></i>
      </button>
    </div>
  );
};

export default Title;
