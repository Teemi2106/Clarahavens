import React from "react";
import SearchComp from "../Components/SearchComp";
import "../CSS/men.css";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import data from "../Db/MensImage1.json";
import data2 from "../Db/MensImage2.json";

const MensView = ({ addToCart, handleCartClick }) => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../images/menRow1", false, /\.(png|jpe?g|svg)$/)
  );
  const images2 = importAll(
    require.context("../images/menRow2", false, /\.(png|jpe?g|svg)$/)
  );

  const like = (event) => {
    event.currentTarget.classList.toggle("liked");
  };

  return (
    <div className="men">
      <header>
        <h1>Men's Collection</h1>
        <SearchComp handleCartClick={handleCartClick} />
      </header>
      <section className="row1">
        {data.map((item) => (
          <div
            className="card"
            key={item.id} // Use unique item.id as key
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img
              src={images[item.filename]}
              alt={item.name}
              className="menrow1"
            />
            <div className="actions">
              <BsCart4 className="cart" onClick={() => addToCart(item)} />
              <FaHeart className="like" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}>${item.price}</p>
          </div>
        ))}
      </section>
      <hr />
      <section className="row2">
        {data2.map((item) => (
          <div
            className="card"
            key={item.id} // Use unique item.id as key
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img
              src={images2[item.filename]}
              alt={item.name}
              className="menrow2"
            />
            <div className="actions">
              <BsCart4 className="cart" onClick={() => addToCart(item)} />
              <FaHeart className="like" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}>${item.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MensView;
