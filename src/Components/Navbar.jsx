import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";
function Navbar() {
  const loc = useLocation();
  return (
    <>
      <input type="checkbox" id="menu-button" className="menu-button" hidden />
      <nav className="navbar">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <ul>
          <li className={loc.pathname === "/" ? "Links active" : "Links"}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={loc.pathname === "/bestiary" ? "Links active" : "Links"}
          >
            <Link to="/bestiary">Bestiary</Link>
          </li>
          <li
            className={loc.pathname === "/skilltree" ? "Links active" : "Links"}
          >
            <Link to="/skilltree">Skill Tree</Link>
          </li>
        </ul>
        <label htmlFor="menu-button" className="hamburger">
          <span className="line" id="line1"></span>
          <span className="line" id="line2"></span>
          <span className="line" id="line3"></span>
        </label>
      </nav>
      <div className="nav-small-link">
        <ul className="small-links">
          <li className={loc.pathname === "/" ? "Links active" : "Links"}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={loc.pathname === "/bestiary" ? "Links active" : "Links"}
          >
            <Link to="/bestiary">Bestiary</Link>
          </li>
          <li
            className={loc.pathname === "/skilltree" ? "Links active" : "Links"}
          >
            <Link to="/skilltree">Skill Tree</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
