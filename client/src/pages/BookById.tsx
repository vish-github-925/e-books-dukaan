import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
const BookById = () => {
  const book = useLoaderData();
  //   console.log(book);
  return (
    <div className="grid place-content-center h-[80.5vh]">
      <DisplayBooks books={book} />
    </div>
  );
};
export default BookById;

export async function loader({ params }) {
  const resp = await axios.get(
    `http://localhost:5005/api/v1/books/${params.category}/${params.id}`
  );
  const book = await resp.data;
  return book;
}
