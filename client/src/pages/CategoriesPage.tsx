import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
import { useParams } from "react-router-dom";
import { API } from "../utils/api_usage";

const CategoriesPage = () => {
  const params = useParams();
  const books = useLoaderData();
  return (
    <main className="w-full relative pb-10  dark:bg-[#191919] dark:text-[#c7c7c7] bg-white">
      <h3 className="text-2xl flex justify-start bg-white py-4 px-4 max-w-4xl mx-auto font-semibold italic text-left sticky top-[12vh] left-0 z-10 dark:bg-[#191919] dark:text-[#c7c7c7]">
        Category &gt; {params.categoryName}
      </h3>
      <section
        className="flex flex-wrap space-x-4 space-y-4
    "
      >
        <DisplayBooks books={books} />
      </section>
    </main>
  );
};
export default CategoriesPage;

export async function loader({ params }) {
  console.log("categories page", API);
  const resp = await axios.get(`${API}/books/category/${params.categoryName}`);
  const books = await resp.data;
  return books;
}
