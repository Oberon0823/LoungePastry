import React from "react";
import "../../styles/style.css";
import Nav from "./Nav";
import HB from "./HB";

const Header = () => {
  return (
    <header className="main-header" id="Main-Header">
      <div className="logo" id="Logo">
        <img src="./img/logo.jpg" alt="logo" />
        <h1>Lounge__Pastry</h1>
      </div>
      <Nav />
      <HB />
    </header>
  );
};

export default Header;
