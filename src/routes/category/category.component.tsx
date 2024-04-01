import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { IItems } from "../../types/product";

import "./category.styles.scss";
// --------------------------------------------------------------------------------

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap && category) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-contaier">
        {products &&
          products.map((product: IItems) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
