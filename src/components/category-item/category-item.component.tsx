import { ICategory } from "../../types/category";
import "./category-item.styles.scss";

const CategoryItem = ({ category }: { category: ICategory }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
