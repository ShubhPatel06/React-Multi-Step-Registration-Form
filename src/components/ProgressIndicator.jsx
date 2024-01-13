import React from "react";

const ProgressIndicator = ({ width }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full ">
      <div
        className="bg-emerald-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: width }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
