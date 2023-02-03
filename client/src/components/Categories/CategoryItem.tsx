import { Link } from "react-router-dom";

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <Link
      to={`/category/${category}`}
      className="hover:text-appcolor cursor-pointer"
    >
      {category}
    </Link>
  );
};
export default CategoryItem;
