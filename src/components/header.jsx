import React from "react";
import { hamburgerMenu, logo } from "../assets";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="" className="logo" />
      <ul class="list">
        <li>
          <strong>Home</strong>
        </li>
        <li style={{ textAlign: "center" }}>
          About <sup>⌄</sup>
        </li>
        <li style={{ textAlign: "center" }}>
          What We Do <sup>⌄</sup>
        </li>
        <li>Portfolio</li>
        <li>Investors</li>
      </ul>
      <div className="center">
        <div className="navCard">
          <div className="btn">
            <div>
              <strong>Oriana Power Ltd.</strong>
            </div>
            <span>NSE</span>
          </div>
          <div className="btn">
            <div>
              <strong style={{ fontSize: "14px" }}>₹ 2,367</strong>
            </div>
            <span>+48.45(4.40%)</span>
            <div className="headline">18 May . close price</div>
          </div>
        </div>

        <img
          src={hamburgerMenu}
          alt=""
          height={40}
          style={{ padding: "20px" }}
        />
      </div>
    </nav>
  );
};

export default Header;
