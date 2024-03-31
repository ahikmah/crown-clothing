import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";
// --------------------------------------------------------------------------------

const Shop = () => {
  const { products: shopData } = useContext(ProductContext);
  return (
    <div className="products-container">
      {shopData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Shop;
