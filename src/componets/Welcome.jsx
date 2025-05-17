import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import FirstModal from "./FirstModal";
import Loader from "./Loader";
import Try from "./Try";
import { useNavigate } from "react-router";

const Welcome = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showLoaderModal, setShowLoaderModal] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const navigate = useNavigate();

  const openWalletModal = () => setShowWalletModal(true);
  const closeWalletModal = () => setShowWalletModal(false);

  const openLoaderModal = () => {
    setShowWalletModal(false);
    setShowLoaderModal(true);
    setShowRetry(false);

    setTimeout(() => {
      setShowLoaderModal(false);
      setShowRetry(true);
    }, 3000);
  };

  const showLoaderForRetry = () => {
    setShowRetry(false);
    setShowLoaderModal(true);

    setTimeout(() => {
      setShowLoaderModal(false);
      navigate("/policy");
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-screen flex flex-col justify-center items-center">
      <div className="flex items-center text-white">
        <h1 className="text-3xl font-bold">GuardPulse</h1>
        <p className="ml-2 text-xl">
          守护 <span className="font-semibold">脉搏</span>
        </p>
      </div>

      <div className="text-center text-white mt-8">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="mt-2 text-lg">Let's start by connecting your wallet</p>

        <button
          type="button"
          onClick={openWalletModal}
          className="text-gray-900 cursor-pointer bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
        >
          Enter App
        </button>

        <p className="mt-4 text-sm">
          By using this application you agree to the Terms of Use. Additionally,
          please refer to the Important Notice.
        </p>
      </div>

      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <FirstModal
            closeModal={closeWalletModal}
            openLoader={openLoaderModal}
          />
        </div>
      )}

      {showLoaderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Loader />
        </div>
      )}

      {showRetry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <Try showLoaderForRetry={showLoaderForRetry} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
