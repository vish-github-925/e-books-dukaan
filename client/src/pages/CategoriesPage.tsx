import axios from "axios";
import { useParams, useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
const CategoriesPage = () => {
  const params = useParams();
  const books = useLoaderData();
  return <DisplayBooks books={books} />;
};
export default CategoriesPage;

export async function loader({ params }) {
  console.log(
    `http://localhost:5005/api/v1/books/category/${params.categoryName}`
  );
  const resp = await axios.get(
    `http://localhost:5005/api/v1/books/category/${params.categoryName}`
  );
  const books = await resp.data;
  return books;
}
