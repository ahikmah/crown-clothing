/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from "react";
import { IItems } from "../types/product";
import { ICart } from "../types/cart";

// --------------------------------------------------------

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (_: any) => {},
  cartItems: [] as ICart[],
  addItemToCart: (_: IItems) => {},
  removeItemFromCart: (_: IItems) => {},
  deleteItemFromCart: (_: IItems) => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ICart[]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (product: IItems) => {
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

  const removeItemFromCart = (product: IItems) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem?.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const deleteItemFromCart = (product: IItems) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
