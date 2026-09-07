import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";

function Hero() {
  return (
    <div className="max-w-[90%] m-auto md:flex mt-20 md:gap-20">
      <div className="flex flex-col gap-7 items-center md:items-start md:w-1/2 ">
        <span className="bg-white/40 px-3 text-white rounded">
          Completely free to use
        </span>
        <h1 className="text-4xl font-medium text-center md:text-left">
          Learn web development through
          <span className="text-primary">interactive quiz</span>
        </h1>
        <p className="text-center md:text-left max-w-[95%]">
          Challenge yourself with over 1k+ carefully crafted questions across 12
          essential web development topics. Perfect your skills in HTML,
          JavaScript, React, and more - all from your mobile or desktop device,
          anytime, anywhere.
        </p>
        <div className="flex gap-3 w-full justify-end">
          <button className="font-medium">Select Filter</button>
          <button className="bg-primary text-black px-4 py-2 rounded font-medium">
            Play
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-5 md:w-1/2 justify-between">
        <div className="bg-white/40 py-4 px-8 rounded-xl border border-0.5 border-white/20 flex flex-col gap-5 justify-baseline">
          <span className="bg-black/40 px-2 self-start text-xs rounded text-white">
            JavaScript
          </span>
          <p>What Will be The Output of this Code?</p>
          <p
            style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
            className="bg-black/40 p-2 rounded"
          >
            <span style={{ color: "#569CD6" }}>const</span>{" "}
            <span style={{ color: "#9CDCFE" }}>numbers</span>{" "}
            <span style={{ color: "#D4D4D4" }}>=</span>{" "}
            <span style={{ color: "#CE9178" }}>[1, 2, 3, 4]</span>;
            <br />
            <span style={{ color: "#569CD6" }}>const</span>{" "}
            <span style={{ color: "#9CDCFE" }}>doubledNumbers</span>{" "}
            <span style={{ color: "#D4D4D4" }}>=</span>{" "}
            <span style={{ color: "#9CDCFE" }}>numbers</span>.
            <span style={{ color: "#DCDCAA" }}>map</span>(
            <span style={{ color: "#9CDCFE" }}>num</span>{" "}
            <span style={{ color: "#D4D4D4" }}>=&gt;</span>{" "}
            <span style={{ color: "#9CDCFE" }}>num</span>{" "}
            <span style={{ color: "#D4D4D4" }}>*</span>{" "}
            <span style={{ color: "#B5CEA8" }}>2</span>);
            <br />
            <span style={{ color: "#DCDCAA" }}>console</span>.
            <span style={{ color: "#DCDCAA" }}>log</span>(
            <span style={{ color: "#9CDCFE" }}>doubledNumbers</span>);
          </p>
        </div>
        <div className="bg-white/40 px-8 py-10 rounded-xl border border-0.5 border-white/20 flex  gap-5 items-center">
          <span className=" px-2 self-start text-2xl rounded text-white">
            <FaCheckSquare />
          </span>
          <p>[2, 4, 6, 8]</p>
        </div>
        <div className="bg-white/40 px-8 py-10 rounded-xl border-2 opacity-60  border-primary flex  gap-5 items-center">
          <span className=" px-2 self-start text-2xl rounded text-white">
            <ImCheckboxUnchecked />
          </span>
          <p>[2, 4, 6, 8]</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
