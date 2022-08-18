import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import images from "../../constants/images";

const Header = () => {
  const path = window.location.pathname;
  return (
    <div className={path !== '/' ? 'headerContainer' : 'headerContainer centerBro' } >
      <img src={images.logo} className="logoImage"/>
      <div>
      <ul>
        {["Home", "about", "contact"].map((item, index) => (
          <Link
          to={item === "Home" ? "/" : item}
          style={{ textDecoration: "none" }}
          key={index}
          >
            <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
          </Link>
        ))}
      </ul>
        </div>
    </div>
  );
};

export default Header;