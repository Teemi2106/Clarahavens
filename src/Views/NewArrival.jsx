import React from "react";
import SearchComp from "../Components/SearchComp";
import "../CSS/men.css";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import data from "../Db/NewArrival.json";

const NewArrival = ({ addToCart, handleCartClick }) => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../images/newArrival", false, /\.(png|jpe?g|svg)$/)
  );

  const like = (event) => {
    event.currentTarget.classList.toggle("liked");
  };

  return (
    <div id="men">
      <header>
        <h1 style={{ color: "white" }}>New Arrival</h1>
        <SearchComp handleCartClick={handleCartClick} />
      </header>
      <section id="row1">
        {data.map((item, index) => (
          <div
            id="card"
            key={index}
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img
              src={images[item.filename]}
              alt={item.name}
              id="menrow1"
              style={{
                backgroundColor: "white",
                objectPosition: "center",
                objectFit: "scale-down",
              }}
            />
            <div id="actions">
              <BsCart4 id="cart" onClick={() => addToCart(item)} />
              <FaHeart id="like" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}> {item.price}</p>
          </div>
        ))}
      </section>
      <hr />
    </div>
  );
};

export default NewArrival;
