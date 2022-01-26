import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="green">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo">
          Todo-List
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Todo List</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
