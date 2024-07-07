import "./App.css";
import Homepage from "./Views/Homepage";
import { Routes, Route, useNavigate } from "react-router-dom";
import MensView from "./Views/MensView";
import WomenView from "./Views/WomenView";
import NewArrival from "./Views/NewArrival";
import { useState, useEffect } from "react";
import Cart from "./Views/Cart";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  const addToCart = (item) => {
    const selectedItem = cart.find((cartItem) => cartItem.id === item.id);

    if (selectedItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/men-collection"
          element={
            <MensView
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route
          path="/women-collection"
          element={
            <WomenView
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route
          path="/new-arrivals"
          element={
            <NewArrival
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;
