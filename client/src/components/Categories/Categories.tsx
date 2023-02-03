import CategoryItem from "./CategoryItem";
const categories: string[] = [
  "Adventure stories",
  "Crime",
  "Classics",
  "Fantasy",
  "Horror",
  "Humor",
  "Fiction",
];
const Categories = () => {
  const categoriesContent = categories.map((category) => (
    <CategoryItem category={category} key={category} />
  ));
  return (
    <div className="flex h-20 max-w-3xl mx-auto bg-white text-black font-bold space-x-5 items-center justify-around">
      {categoriesContent}
    </div>
  );
};
export default Categories;
