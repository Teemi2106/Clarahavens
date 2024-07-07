import React from "react";
import "../CSS/men.css";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import data from "../Db/WomenImage1.json";
import data2 from "../Db/WomensImage2.json";
import { CiSearch } from "react-icons/ci";
import { Input } from "@chakra-ui/react";
import { FaRegCircleUser } from "react-icons/fa6";

const WomenView = ({ addToCart, handleCartClick }) => {
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("../images/womenRow1", false, /\.(png|jpe?g|svg)$/)
  );
  const images2 = importAll(
    require.context("../images/womenRow2", false, /\.(png|jpe?g|svg)$/)
  );

  const like = (event) => {
    event.currentTarget.classList.toggle("liked");
  };

  return (
    <div id="women">
      <header>
        <h1>Women's Collection</h1>
        <div id="wsearchcmp">
          {" "}
          <form id="wheaderForm">
            <Input backgroundColor="white" type="text" />
          </form>
          <div id="wheaduser">
            <BsCart4 cursor="pointer" size="5vmin" onClick={handleCartClick} />
          </div>
        </div>
      </header>
      <section id="wrow1">
        {data.map((item, index) => (
          <div
            id="card"
            key={index}
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img src={images[item.filename]} alt={item.name} id="womenrow1" />
            <div id="actions">
              <BsCart4 id="wcart" onClick={() => addToCart(item)} />
              <FaHeart id="wlike" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}>${item.price}</p>
          </div>
        ))}
      </section>
      <hr />
      <section id="wrow2">
        {data2.map((item, index) => (
          <div
            id="card"
            key={index}
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img src={images2[item.filename]} alt={item.name} id="womenrow2" />
            <div id="actions">
              <BsCart4 id="wcart" onClick={() => addToCart(item)} />
              <FaHeart id="wlike" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}>${item.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WomenView;
