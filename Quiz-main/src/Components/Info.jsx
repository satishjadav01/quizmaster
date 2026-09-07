import React from "react";

function Info() {
  return (
    <div className="bg-white/20 max-w-[90%] m-auto mt-50 rounded-2xl md:flex">
      <div className="-top-30 relative -mb-40">
        <img src="/images/decoration/mockup.png" alt="" srcset="" />
      </div>
      <div className="p-10 md:flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-5">Play anywhere, anytime</h1>
        <p className="text-gray-300">
          Quizstack's mobile-first design means you can strengthen your
          development skills during your commute, lunch break, or whenever
          inspiration strikes.
        </p>
        <br />
        <p className="text-gray-300">
          Our responsive interface adapts perfectly to any screen size,
          providing a seamless quiz experience whether you're on a smartphone,
          tablet, or desktop.
        </p>
      </div>
    </div>
  );
}

export default Info;
