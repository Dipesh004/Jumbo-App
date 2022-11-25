import React from "react";
import { Link } from "react-router-dom";

const EBookHeader = () => {
  return (
    <div className="calculator-header">
      <Link to="/">
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/738/738822.png"
            alt="home"
          />
        </span>
      </Link>
      <h2>Calculator</h2>
    </div>
  );
};

export default EBookHeader;
