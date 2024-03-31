/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

// --------------------------------------------------------

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (_: any) => {},
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
