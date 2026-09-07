import React from "react";

function FilterCard({ color, title }) {
  const borderColor = {
    primary: "border-primary",
    second: "border-blue-500",
    third: "border-green-500",
    four: "border-red-500",
    five: "border-yellow-500",
    six: "border-purple-500",
    seven: "border-pink-500",
    eight: "border-indigo-500",
    nine: "border-teal-500",
    ten: "border-orange-500",
    eleven: "border-gray-500",
    twelve: "border-cyan-500",
  };
  return (
    <div
      className={`bg-[url(/images/categories/pattern.png)] hover:border-white p-8 bg-cover bg-center bg-black/80 border-2 rounded-2xl font-bold text-lg text-center ${borderColor[color]} bg-blend-color-burn `}
    >
      {title}
    </div>
  );
}

export default FilterCard;
