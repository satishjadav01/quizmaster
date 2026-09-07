import React from "react";

function Card({ icon, title, description, color }) {
  const bordercolorMap = {
    primary: "border-b-primary",
    secondary: "border-b-blue-500",
    third: "border-b-green-300",
  };
  const textcolorMap = {
    primary: "text-primary",
    secondary: "text-blue-500",
    third: "text-green-300",
  };
  return (
    <div
      className={`bg-black/60 border border-white p-6 rounded-lg ${bordercolorMap[color]} flex flex-col gap-4`}
    >
      <span
        className={`${textcolorMap[color]} bg-white/20 self-start p-1 rounded`}
      >
        {icon}
      </span>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
