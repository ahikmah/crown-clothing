/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from "react";
import { IProduct } from "../types/product";
import { ICart } from "../types/cart";

// --------------------------------------------------------

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (_: any) => {},
  cartItems: [] as ICart[],
  addItemToCart: (_: IProduct) => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ICart[]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  const addItemToCart = (product: IProduct) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
