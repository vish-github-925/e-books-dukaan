import { Link } from "react-router-dom";

const CategoryItem = ({ category }: { category: string }) => {
  const categoryItem = category.split(" ")[0].toLowerCase();
  return (
    <Link
      to={`/category/${categoryItem}`}
      className="hover:text-appcolor cursor-pointer flex flex-col items-center"
    >
      <img
        src={`/images/category-icons/${category}.svg`}
        alt="Horror"
        height={24}
        width={24}
      />
      <h3 className="text-sm">{category}</h3>
    </Link>
  );
};
export default CategoryItem;
