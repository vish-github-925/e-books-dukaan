import axios from "axios";
import { useLoaderData } from "react-router-dom";
import BookComponent from "./components/Book/BookComponent";
import DisplayBooks from "./components/Book/DisplayBooks";
import Categories from "./components/Categories/Categories";
import { useUserContext } from "./context/UserContextProvider";
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
  const user = useUserContext();
  // console.log(books);
  return (
    <main className="mt-20">
      <Categories />
      <div className="mt-40">
        <h1 className="text-4xl font-bold text-appcolor text-center">
          {user.username && <span>Hi {user.username},</span>} Welcome to the
          Books Dukaan
        </h1>
        <div className="mt-4 mx-auto max-w-4xl">
          <DisplayBooks books={books} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

export async function loader() {
  const res = await axios.get("http://localhost:5005/api/v1/books");
  const books = await res.data;
  return books;
}
