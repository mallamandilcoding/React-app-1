import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const logIn = () => {
    console.log("log in");
    setIsLoggedIn(true);
    navigate("/");
  };
  const logOut = () => {
    console.log("log out");
    setIsLoggedIn(false);
    navigate("/contact");
  };
  return (
    <>
      <div className="navbar-div">
        <div className="left logo-div">TESTTTT</div>
        <div className="right links-div">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          {isLoggedIn && (
            <>
              <Link to={"/products"}>Product</Link>
              <Link to={"/team"}>Team</Link>
            </>
          )}

          <Link to={"/contact"}>Contact</Link>
          <button onClick={logIn}>Log In</button>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
