import { Link } from "react-router-dom";

const CategoryItem = ({ category }: { category: string }) => {
  const categoryItem = category.split(" ")[0].toLowerCase();
  return (
    <Link
      to={`/category/${categoryItem}`}
      className="hover:text-appcolor cursor-pointer"
    >
      {category}
    </Link>
  );
};
export default CategoryItem;
