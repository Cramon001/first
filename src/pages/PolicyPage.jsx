import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Redirecting from "../componets/Redirecting"; // Ensure this path is correct
import lock from "./locks.png";

function PolicyPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        navigate("/connect");
      }, 3000); // Redirect after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  const handlePolicyAction = () => {
    setShowModal(true);
  };

  return (
    <div className="relative max-w-3xl mx-auto px-6 py-10 text-gray-800 rounded bg-gray-300">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Agreement Policy and Safety</h1>
        <p className="text-lg">
          Please review our policy and safety guidelines before proceeding.
        </p>
      </div>

      {/* Sections */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. User Agreement</h2>
        <p>
          By utilizing our cryptocurrency wallet services, you acknowledge and
          agree to comply with all relevant laws and regulations. You are solely
          responsible for safeguarding your credentials.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Security Measures</h2>
        <p>We follow top-tier security protocols:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Use a unique and strong password.</li>
          <li>Enable two-factor authentication (2FA).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Risk Disclosure</h2>
        <p>
          Cryptocurrency values fluctuate. Only invest what you can afford to
          lose.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Privacy Policy</h2>
        <p>Your data is handled according to our Privacy Policy.</p>
      </section>

      {/* Footer */}
      <div className="flex flex-col items-center mt-10 space-y-4">
        <img src={lock} alt="Lock icon" className="w-24 h-24" />
        <p className="text-center text-lg font-medium">
          Your security is our top priority
        </p>
        <div className="flex w-full max-w-md">
          <button
            onClick={handlePolicyAction}
            className="w-1/2 bg-blue-500 text-white py-2 hover:bg-blue-600"
          >
            Agree
          </button>
          <button
            onClick={handlePolicyAction}
            className="w-1/2 bg-gray-500 text-white py-2 hover:bg-gray-600"
          >
            Decline
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 transform transition-transform duration-300 scale-100">
            <Redirecting />
          </div>
        </div>
      )}
    </div>
  );
}

export default PolicyPage;
