import React from "react";

const LoadingSpin = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm">
          <div className="skeleton w-full h-[180px] rounded-md"></div>
          <div className="skeleton h-4 w-32"></div>
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpin;
