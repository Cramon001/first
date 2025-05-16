import React from "react";
import { useNavigate } from "react-router";

const Try = ({ showLoaderForRetry }) => {
  const navigate = useNavigate();

  const handleManualConnect = () => {
    navigate("/policy");
  };

  const handleRetry = () => {
    showLoaderForRetry(); // Show loader for 2 seconds, then redirect
  };

  return (
    <div className="text-center">
      <p className="mb-4 text-gray-800">
        Wallet not detected due to outdated node API. Please verify you have the
        selected wallet installed.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleRetry}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Retry
        </button>
        <button
          onClick={handleManualConnect}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Connect Manually
        </button>
      </div>
    </div>
  );
};

export default Try;
