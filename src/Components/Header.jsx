import React from "react";
import "../CSS/Header.css";
import SearchComp from "./SearchComp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "@chakra-ui/react";
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
      <SearchComp handleCartClick={handleCartClick} />
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
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </header>
  );
};

export default Header;
