import React, { useState } from "react";
import AdminPage from "../pages/AdminPage";

const ProtectedAdmin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const correctPassword = "9933"; // 👉 You can replace this with your actual passcode

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (authenticated) {
    return <AdminPage />;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded shadow-md"
      >
        <h2 className="text-xl mb-4 font-bold">Enter Admin Password</h2>
        <input
          type="password"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="w-full p-2 rounded mb-4 text-black"
        />
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProtectedAdmin;
