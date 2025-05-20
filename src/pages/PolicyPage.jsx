import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Redirecting from "../componets/Redirecting";
import lock from "./locks.png";
import { useNavigate } from "react-router";

function PolicyPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        navigate("/connect");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  const handlePolicyAction = () => {
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-10"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 z-[-1] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="max-w-3xl w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 text-white z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold">Agreement Policy and Safety</h1>
          <p className="text-lg mt-2">
            Please review our policy and safety guidelines before proceeding.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="py-2">
            <h1 className="collapse-title text-base font-semibold">
              1. User Agreement
            </h1>
            <div className="collapse-content text-sm my-1">
              By utilizing our cryptocurrency wallet services, you acknowledge
              and agree to comply with all relevant laws and regulations. You
              are solely responsible for safeguarding your credentials.
            </div>
          </div>
          <div className="py-2">
            <h1 className="collapse-title text-base font-semibold">
              2. Security Measures
            </h1>
            <div className="collapse-content text-sm space-y-1">
              <p>We follow top-tier security protocols:</p>
              <ul className="list-disc list-inside pl-2">
                <li>Use a unique and strong password.</li>
                <li>Enable two-factor authentication (2FA).</li>
              </ul>
            </div>
          </div>
          <div className="py-2">
            <h1 className="collapse-title text-base font-semibold">
              3. Risk Disclosure
            </h1>
            <div className="collapse-content text-sm">
              Cryptocurrency values fluctuate. Only invest what you can afford
              to lose.
            </div>
          </div>
          <div className="py-2">
            <h1 className="collapse-title text-base font-semibold">
              4. Privacy Policy
            </h1>
            <div className="collapse-content text-sm">
              Your data is handled according to our Privacy Policy.
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center mt-10 space-y-4"
        >
          <img src={lock} alt="Lock icon" className="w-20 h-20" />
          <p className="text-center text-lg font-medium">
            Your security is our top priority
          </p>
          <div className="flex w-full max-w-md space-x-2">
            <button
              onClick={handlePolicyAction}
              className="w-1/2 bg-lime-400 hover:bg-lime-500 text-black font-medium py-2 rounded-lg transition"
            >
              Agree
            </button>
            <button
              onClick={handlePolicyAction}
              className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 rounded-lg transition"
            >
              Decline
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <Redirecting />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default PolicyPage;
