import React from "react";
import FilterCard from "./FilterCard";

function Filter() {
  return (
    <div className="max-w-[90%] md:max-w-[70%]  m-auto mt-10">
      <div className="text-4xl font-bold my-20">Filters</div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        <FilterCard title="JavaScript" color="primary" />
        <FilterCard title="HTML" color="second" />
        <FilterCard title="CSS" color="third" />
        <FilterCard title="SQL" color="four" />
        <FilterCard title="PHP" color="five" />
        <FilterCard title="Frontend" color="six" />
        <FilterCard title="Backend" color="seven" />
        <FilterCard title="Database" color="eight" />
        <FilterCard title="APIs" color="nine" />
        <FilterCard title="Testing" color="ten" />
        <FilterCard title="Deployment" color="eleven" />
        <FilterCard title="Security" color="twelve" />
      </div>
    </div>
  );
}

export default Filter;
