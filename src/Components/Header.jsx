import React from "react";
import "../CSS/Header.css";
import SearchComp from "./SearchComp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const handleCheckoutClick = () => {
    navigate("/checkout");
  };
  const handleProfileClick = () => {
    alert("Coming Soon...");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="mainHeader">
      <ul id="mm">
        <li onClick={handleMenClick}>Men</li>
        <li onClick={handleWomenClick}>Women</li>
        <li onClick={handleNewClick}>New Arrival</li>
      </ul>
      <h2 className="logo">CLARAHAVENS</h2>
      <div id="search">
        <SearchComp handleCartClick={handleCartClick} />
      </div>
      <div className="media">
        <IoIosMenu onClick={handleShow} size="10vmin" />

        <Offcanvas show={show} onHide={handleClose} id="offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id="offbody">
            <ul id="offul">
              <li onClick={handleMenClick} style={{ cursor: "pointer" }}>
                Men
              </li>
              <li onClick={handleWomenClick} style={{ cursor: "pointer" }}>
                Women
              </li>
              <li onClick={handleNewClick} style={{ cursor: "pointer" }}>
                New Arrival
              </li>
              <li onClick={handleCartClick} style={{ cursor: "pointer" }}>
                Cart
              </li>
              <li onClick={handleProfileClick} style={{ cursor: "pointer" }}>
                Profile
              </li>
              <li onClick={handleCheckoutClick} style={{ cursor: "pointer" }}>
                Checkout
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </header>
  );
};

export default Header;
