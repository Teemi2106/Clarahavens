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
    <div className="women">
      <header>
        <h1>Women's Collection</h1>
        <div className="searchcmp">
          {" "}
          <form className="headerForm">
            <CiSearch color="white" size="4vmin" />
            <Input backgroundColor="white" type="text" />
          </form>
          <div className="headuser">
            <BsCart4 cursor="pointer" size="5vmin" onClick={handleCartClick} />
            <FaRegCircleUser cursor="pointer" size="4vmin" />
          </div>
        </div>
      </header>
      <section className="wrow1">
        {data.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img
              src={images[item.filename]}
              alt={item.name}
              className="womenrow1"
            />
            <div className="actions">
              <BsCart4 className="wcart" onClick={() => addToCart(item)} />
              <FaHeart className="wlike" onClick={like} />
            </div>
            <h3 style={{ textAlign: "left" }}>{item.name}</h3>
            <p style={{ textAlign: "left" }}>${item.price}</p>
          </div>
        ))}
      </section>
      <hr />
      <section className="wrow2">
        {data2.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ margin: "20px", textAlign: "center" }}
          >
            <img
              src={images2[item.filename]}
              alt={item.name}
              className="womenrow2"
            />
            <div className="actions">
              <BsCart4 className="wcart" onClick={() => addToCart(item)} />
              <FaHeart className="wlike" onClick={like} />
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
