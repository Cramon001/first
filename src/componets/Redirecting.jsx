import React from "react";

const Redirecting = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Redirecting...</h2>
      <div className="w-40 h-2 bg-gray-300 rounded overflow-hidden">
        <div className="w-full h-full bg-blue-500 animate-pulse origin-left" />
      </div>
    </div>
  );
};

export default Redirecting;
