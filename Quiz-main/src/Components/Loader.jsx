import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
