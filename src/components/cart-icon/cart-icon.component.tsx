import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartIMG from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

// ----------------------------------------------------------------

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen((prev: boolean) => !prev)}
    >
      <img src={CartIMG} alt="Cart" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
