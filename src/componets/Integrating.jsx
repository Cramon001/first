import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";

const Integrating = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative shadow-lg space-y-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold text-center text-indigo-600">
          Security Reminder
        </h2>
        <p className="text-sm text-center text-gray-700">
          Initializing connection… Integrating wallet API…
        </p>
        <div className="flex justify-between mt-4">
          <button className="text-sm text-gray-600 hover:text-black flex items-center space-x-1">
            <BiArrowBack /> <span>Previous</span>
          </button>
          <button className="text-sm text-gray-600 hover:text-black">
            Skip All
          </button>
          <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center space-x-1">
            <span>Next</span> <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrating;
