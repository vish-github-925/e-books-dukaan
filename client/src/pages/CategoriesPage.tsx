import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
import { useParams } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
const CategoriesPage = () => {
  const params = useParams();
  const books = useLoaderData();
  return (
    <main className="mt-20 max-w-4xl mx-auto">
      <h3 className="text-2xl flex justify-start p-4 font-semibold italic text-left sticky top-[68px] z-30 bg-white">
        Category &gt; {params.categoryName}
      </h3>
      <section
        className="flex flex-wrap space-x-4 space-y-4 mt-10
    "
      >
        <DisplayBooks books={books} />
      </section>
    </main>
  );
};
export default CategoriesPage;

export async function loader({ params }) {
  const resp = await axios.get(
    `http://localhost:5005/api/v1/books/category/${params.categoryName}`
  );
  const books = await resp.data;
  return books;
}
