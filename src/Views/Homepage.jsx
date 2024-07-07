import React from "react";
import Header from "../Components/Header";
import "../CSS/Homepage.css";
import { IoIosSend } from "react-icons/io";
import { Center } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <div>
      <Header />
      <main id="homeMain">
        <section className="hero">
          <Center w="60%" h="50vh">
            <h1>
              <span className="white">Style</span> for All: Discover Your{" "}
              <span className="white">Unique</span> Look with{" "}
              <span className="white">Our</span> Unisex Fashion
            </h1>
          </Center>
          <button className="heroBtn">
            Explore New Arrival <IoIosSend color="white" />
          </button>
        </section>
        <footer>
          <div className="each">
            <div className="colorCircle"></div>
            <p>Enjoy 30% Discount Sales</p>
            <div className="colorCircle"></div>
          </div>
          <div className="each">
            <div className="colorCircle"></div>
            <p>Order For Your Summer Outfit</p>
            <div className="colorCircle"></div>
          </div>
          <div className="each">
            <div className="colorCircle"></div>
            <p>July Awoof Sales</p>
            <div className="colorCircle"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;
