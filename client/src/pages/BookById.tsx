import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "../components/Book/DisplayBooks";
import { API } from "../utils/api_usage";

const BookById = () => {
  const book = useLoaderData();
  //   console.log(book);
  return (
    <div className="grid place-content-center min-h-[76vh]">
      <DisplayBooks books={book} />
    </div>
  );
};
export default BookById;

export async function loader({ params }) {
  const resp = await axios.get(
    `${API}/books/${params.category}/${params.id}`
  );
  const book = await resp.data;
  return book;
}
