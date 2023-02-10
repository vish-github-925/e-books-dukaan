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
    <div className="h-24 w-[100%] mb-[40px] bg-white dark:bg-[#191919]  text-black font-bold fixed left-70 top-[68px] z-20 flex justify-center">
      <div className="flex max-w-4xl mx-auto px-4 justify-between gap-x-20  bg-white text-black dark:bg-[#191919] dark:text-[#c7c7c7] font-bold items-center">
        {categoriesContent}
      </div>
    </div>
  );
};
export default Categories;
