import React from "react";
import "../CSS/Header.css";
import SearchComp from "./SearchComp";
import { useNavigate } from "react-router-dom";
import OffcanvasMenu from "react-offcanvas-menu-component";

const Header = () => {
  const navigate = useNavigate();

  const handleMenClick = () => {
    navigate("/men-collection");
  };
  const handleWomenClick = () => {
    navigate("/women-collection");
  };
  const handleNewClick = () => {
    navigate("/new-arrivals");
  };
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <header className="mainHeader">
      <ul>
        <li onClick={handleMenClick}>Men</li>
        <li onClick={handleWomenClick}>Women</li>
        <li onClick={handleNewClick}>New Arrival</li>
      </ul>
      <h2 className="logo">CLARAHAVENS</h2>
      <SearchComp handleCartClick={handleCartClick} />
      {/*  <OffcanvasMenu
        className="offcanvas"
        config={{
          push: true,
        }}
        menu={[
          <ul>
            <li onClick={handleMenClick}>Men</li>
            <li onClick={handleWomenClick}>Women</li>
            <li onClick={handleNewClick}>New Arrival</li>
          </ul>,
        ]}
      /> */}
    </header>
  );
};

export default Header;
