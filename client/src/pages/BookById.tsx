import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
const BookById = () => {
  const book = useLoaderData();
//   console.log(book);
  return (
    <div>
      <DisplayBooks books={book} />
    </div>
  );
};
export default BookById;

export async function loader({ params }) {
  const resp = await axios.get(
    `http://localhost:5005/api/v1/books/${params.id}`
  );
  const book = await resp.data;
  return book;
}
