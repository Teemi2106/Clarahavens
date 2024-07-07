import React from "react";
import "../CSS/cart.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Cart = ({ cart }) => {
  const cartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const shipping = () => {
    const shipFee = (parseInt(cartTotal()) * 10) / 100;
    return shipFee.toFixed(2);
  };

  const tax = () => {
    const taxFee = (cartTotal() + parseFloat(shipping())) * 0.1;
    return taxFee.toFixed(2);
  };

  const navigate = useNavigate();

  const submit = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartdiv">
      <Header />
      <h2>Cart</h2>
      <ul className="cartul">
        {cart.map((item) => (
          <li key={item.id} className="cartli">
            <img
              src={require(`../images/${item.folder}/${item.filename}`)}
              alt={item.name}
              className="cartimg"
            />
            <div>
              <h3 className="cartname">{item.name}</h3>
              <p className="cartprice">Price: ${item.price}</p>
              <p className="cartquantity">Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <section className="checkout">
        <p className="p">
          Subtotal: <span>${cartTotal().toFixed(2)}</span>
        </p>
        <p className="p">
          Shipping: <span>${shipping()}</span>
        </p>
        <p className="p">
          Tax: <span>${tax()}</span>
        </p>
        <hr />
        <p className="p total">
          Total:{" "}
          <span>
            $
            {(cartTotal() + parseFloat(shipping()) + parseFloat(tax())).toFixed(
              2
            )}
          </span>
        </p>
        <Button backgroundColor={"teal"} color={"white"} onClick={submit}>
          Checkout
        </Button>
      </section>
    </div>
  );
};

export default Cart;
