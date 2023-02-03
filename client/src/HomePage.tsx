import axios from "axios";
import { useLoaderData } from "react-router-dom";
import BookComponent from "./components/Book/BookComponent";
import DisplayBooks from "./components/Book/DisplayBooks";
import Categories from "./components/Categories/Categories";
// import { queryClient } from "./main";

type Book = {
  title: string;
  id: number;
  price: number;
  author: string;
  specialDeal?: boolean;
  discount?: number;
  category: string;
};

const HomePage = () => {
  const books = useLoaderData() as Book[];
  // console.log(books);
  return (
    <div>
      <div>
        <Categories />
      </div>
      <h1
        className="text-4xl text-center my-6
      "
      >
        Welcome to the Books Dukaan
      </h1>
      <div className="h-[400px] max-w-4xl mx-auto flex flex-wrap gap-6 mt-6">
        <DisplayBooks books={books} />
      </div>
    </div>
  );
};

export default HomePage;

export async function loader() {
  const res = await axios.get("http://localhost:5005/api/v1/books");
  const books = await res.data;
  return books;
}
