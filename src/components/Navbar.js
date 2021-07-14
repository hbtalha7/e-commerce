import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/cart">
          <label className="checkcart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </label>
        </Link>
        <label>TASA</label>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </label>
        <ul>
          <li>
            <Link to="/" id="a" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" id="a" style={{ textDecoration: "none" }}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" id="a" style={{ textDecoration: "none" }}>
              CART
            </Link>
          </li>
          <li>
            <Link to="/" id="a" style={{ textDecoration: "none" }}>
              LOGIN
            </Link>
          </li>
          <li>
            <Link to="/" id="a" style={{ textDecoration: "none" }}>
              SIGNUP
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
