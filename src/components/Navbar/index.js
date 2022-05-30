import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <Link to={"/"} className="navbar">
         attendence app
        </Link>
        <Link to={"/"} className="navbar">
         home
        </Link>
        <Link to={"/add"} className="navbar">
        Add Attendee
        </Link>
        <Link to={"/"} className="navbar">
        contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
