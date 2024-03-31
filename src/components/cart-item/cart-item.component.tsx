import { ICart } from "../../types/cart";

import "./cart-item.styles.scss";

// --------------------------------------------------------

const CartItem = ({ cartItem }: { cartItem: ICart }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img alt={name} src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
