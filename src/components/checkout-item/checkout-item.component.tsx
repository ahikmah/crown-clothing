import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ICart } from "../../types/cart";
import "./checkout-item.styles.scss";

// ----------------------------------------------------------------

const CheckoutItem = ({ cartItem }: { cartItem: ICart }) => {
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${cartItem.price}</span>
      <div
        className="remove-button"
        onClick={() => deleteItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
