import "./directory.styles.scss";

import DirectoryItem from "../directory-item/directory-item.component";
import { ICategory } from "../../types/category";

const Directory = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
