import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";
const Integrating = () => {
  return (
    <div>
      <h2>Security Reminder</h2>
      <div>
        <p>Initializing connection … Integrating wallet API …</p>
      </div>
      <div>
        <button>
          {" "}
          <span>
            <BiArrowBack />
          </span>{" "}
          Previous
        </button>
        <button>Skip All</button>
        <button>
          Next{" "}
          <span>
            <FaArrowRightLong />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default Integrating;
