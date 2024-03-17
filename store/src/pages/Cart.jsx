import { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import "./Cart.css";
import bin from "./images/bin.png";
import plus from "./images/plus.png";
import minus from "./images/minus.png";

export const Cart = () => {
  const [data, setData] = useState([]);
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (cart) {
      setData(cart);
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCart = data.filter((item) => item.id !== itemId);
    setData(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const Inc = (itemId) => {
    const updatedCart = data.map((item) => {
      if (item.id === itemId) {
        item.game.qtn += 1;
      }
      return item;
    });
    setData(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const Dec = (itemId) => {
    const updatedCart = data.map((item) => {
      if (item.id === itemId && item.game.qtn > 1) {
        item.game.qtn -= 1;
      }
      return item;
    });
    setData(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  };


  return (
    <div>
      <Navbar />
      <div className="ll">
        <div className="hhh">
          {data.length != 0 ? (
            data.map((item) => (
            <div key={item.id} className="items">
              <img src={item.game.poster} alt="" className="cart-poster" />
              <div className="info">
                <div className="one">
                  <p className="name">{item.game.name}</p>
                  <div>
                    <img src={bin} alt="" className="bin" onClick={() => handleRemoveItem(item.id)}/>
                  </div>
                </div>
                <div className="two">
                  <p className="price">${item.game.price}</p>
                  <div className="qtn">
                    <div className="clicks-div" onClick={() => Dec(item.id)}>
                      <img src={minus} className="clicks" alt="Minus" />
                    </div>
                    <div className="quantite-div">
                      <span className="quantite">{item.game.qtn}</span>
                    </div>
                    <div className="clicks-div" onClick={() => Inc(item.id)}>
                      <img src={plus} className="clicks" alt="Plus" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )))
          : (
            <h1>You dont have any product in the cart.</h1>
          )}
        </div>
        <div className="pay">
          <h1>Summary</h1>
          <div className="total">
            <h3>Total :</h3>
            <h2>${calculateTotal(data)}</h2>
          </div>
          <button type="button" className="checkout">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.game.price * item.game.qtn, 0);
};
