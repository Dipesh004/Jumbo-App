import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>Jumbo App!!! by Dipesh Sharma</div>
      <div className="icon-container">
        <Link to="/todoslist" style={{ textDecoration: "none" }}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/839/839860.png"
              alt="tdl"
            />
            <p>Todos-List</p>
          </span>
        </Link>
        <Link to="/ebook" style={{ textDecoration: "none" }}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3218/3218394.png"
              alt="book"
            />
            <p>Books-List</p>
          </span>
        </Link>
        <Link to="/calculator" style={{ textDecoration: "none" }}>
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2374/2374409.png"
              alt="calculator"
            />
            <p>Calculator</p>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Home;
