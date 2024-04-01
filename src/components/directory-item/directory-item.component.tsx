import { useNavigate } from "react-router-dom";
import { ICategory } from "../../types/category";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }: { category: ICategory }) => {
  const navigate = useNavigate();
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="body" onClick={() => navigate(`/shop/${category.title}`)}>
        <h2>{category.title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
