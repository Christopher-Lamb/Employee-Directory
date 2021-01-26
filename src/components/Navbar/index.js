import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <Link className="navbar-brand link" to="/">
        Employee Directory
      </Link>
    </nav>
  );
}

export default Navbar;
