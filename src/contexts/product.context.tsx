import { createContext, useState } from "react";
import { IProduct } from "../types/product";

import PRODUCTS from "../mock/shop-data.json";

// --------------------------------------------------------------------------------

export const ProductContext = createContext({
  products: [] as IProduct[],
});

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = {
    products: products as IProduct[],
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
