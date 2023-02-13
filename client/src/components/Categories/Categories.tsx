import CategoryItem from "./CategoryItem";
const categories: string[] = [
  "Adventure",
  "Crime",
  "Classics",
  "Horror",
  "Humor",
];
const Categories = () => {
  const categoriesContent = categories.map((category) => (
    <CategoryItem category={category} key={category} />
  ));
  return (
    <div className="h-20 bg-white dark:bg-[#191919]  text-black font-bold sticky top-[12vh] z-10 flex max-w-lg mx-auto sm:max-w-xl lg:max-w-4xl gap-x-16 lg:gap-x-36 justify-center dark:text-[#c7c7c7] items-center">
      {categoriesContent}
    </div>
  );
};
export default Categories;
