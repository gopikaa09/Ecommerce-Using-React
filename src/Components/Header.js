import React from "react";
import headerStyle from "./header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <div className={headerStyle.container}>
      <div className={headerStyle.left}>
        <h2>
          <span>O</span>nline <span>S</span>tore
        </h2>
      </div>
      <div className={headerStyle.right}>
        <button onClick={handleCart}>Cart</button>
      </div>
    </div>
  );
}

export default Header;
