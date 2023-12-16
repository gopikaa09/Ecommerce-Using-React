import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./cards.module.css";

function Cart() {
  const [cartdata, setCartdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        // Assuming the cart data is in res.data
        setCartdata(res.data); // Extract data from the response object
      })
      .catch((error) => {
        console.log("Error fetching cart data:", error);
      });
  }, []);
  console.log(cartdata[0].cart[0].title);
  //   console.log(cartdata[0].cart[0].title);
  return (
    <div className={style.Cards}>
      {cartdata.map((cartItem) =>
        cartItem.cart.map((item, index) => (
          <div className={style.InnerCards}>
            <img src={item.images[0]}></img>
            <p>{item.title}</p>
            <div>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

