import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Warning from "../componets/warning.png";

const SecurityCheck = ({ onClose, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>
        <div className="flex flex-col items-center space-y-4 text-center">
          <img src={Warning} alt="Security Warning" className="w-20 h-20" />
          <h2 className="text-xl font-bold text-blue-600">Security Check</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <FaArrowRightLong className="text-blue-500" />
              <p>Double-check all details before proceeding.</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaArrowRightLong className="text-blue-500" />
              <p>Verify you're on the correct website URL.</p>
            </div>
          </div>
        </div>
        <div
          onClick={onContinue}
          className="items-center flex justify-center my-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded hover:from-indigo-600 hover:to-purple-600 transition-colors cursor-pointer"
        >
          <button>I understood, continue</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityCheck;
