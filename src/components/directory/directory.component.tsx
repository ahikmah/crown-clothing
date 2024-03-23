import "./directory.styles.scss";

import CategoryItem from "../category-item/category-item.component";
import { ICategory } from "../../types/category";

const Directory = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
