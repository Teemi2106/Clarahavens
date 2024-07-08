import React from "react";
import Header from "../Components/Header";
import { Button, Input } from "@chakra-ui/react";
import "../CSS/checkout.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Checkout = () => {
  const image = "../images/pay.png";
  const navigate = useNavigate();
  const submit = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div id="checkout">
      <Header />
      <main>
        <IoMdArrowRoundBack onClick={goBack} size="5vmin" />
        <h1>Check Out</h1>
        <form id="checkForm">
          <div>
            {/* <label htmlFor="fName">First Name</label> */}
            <Input type="text" id="fName" placeholder="First Name" />
            {/* <label htmlFor="lName">Last Name</label> */}
            <Input type="text" id="lName" placeholder="Last Name" />
          </div>
          <div>
            {/* <label htmlFor="address">Address</label> */}
            <Input type="text" id="address" placeholder="Address" />
          </div>
          <div>
            {/* <label htmlFor="city">City</label> */}
            <Input type="text" id="city" placeholder="City" />
            {/* <label htmlFor="state">Country</label> */}
            <Input type="text" id="state" placeholder="Country" />
          </div>
          <div>
            {/*  <label htmlFor="zip">Zip Code</label> */}
            <Input type="text" id="zip" placeholder="Postal Code" />
            {/* <label htmlFor="number">Phone Number</label> */}
            <Input type="text" id="number" placeholder="Phone Number" />
          </div>
        </form>
        <div id="pay">
          <h2>Payment Method</h2>
          <img src={image} alt="" />
          <Button onClick={submit}>Checkout</Button>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
