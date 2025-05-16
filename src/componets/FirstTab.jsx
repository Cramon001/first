import React, { useState } from "react";

const FirstTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const baseClasses = "px-4 py-1 text-black text-[15px] cursor-pointer";
  const activeClass = "bg-white";
  const inactiveClass = "bg-gray";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full px-4 py-2  bg-gray-700 text-black">
        {/* Tab One */}
        <button
          className={`${baseClasses} ${
            activeTab === "tab1" ? activeClass : inactiveClass
          } rounded`}
          onClick={() => setActiveTab("tab1")}
        >
          Tab One
        </button>

        {/* Tab Two */}
        <button
          className={`${baseClasses} ${
            activeTab === "tab2" ? activeClass : inactiveClass
          } rounded`}
          onClick={() => setActiveTab("tab2")}
        >
          Tab Two
        </button>

        {/* Tab Three */}
        <button
          className={`${baseClasses} ${
            activeTab === "tab3" ? activeClass : inactiveClass
          } rounded`}
          onClick={() => setActiveTab("tab3")}
        >
          Tab Three
        </button>
      </div>

      <div></div>
      <div className="p-6 bg-white border border-gray-300">
        {activeTab === "tab1" && <div>Tab content 1</div>}
        {activeTab === "tab2" && <div>Tab content 2</div>}
        {activeTab === "tab3" && <div>Tab content 3</div>}
      </div>
    </div>
  );
};

export default FirstTab;
