import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar-div">
        <div className="left logo-div">TESTTTT</div>
        <div className="right links-div">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/products"}>Product</Link>
          <Link to={"/team"}>Team</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
