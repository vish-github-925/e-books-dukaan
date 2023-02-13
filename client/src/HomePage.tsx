import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DisplayBooks from "./components/Book/DisplayBooks";
import Categories from "./components/Categories/Categories";
import { useUserContext } from "./context/UserContextProvider";
import { useNavigation } from "react-router-dom";
import BooksSkeleton from "./components/skeleton/BooksSkeleton";
import { API } from "./utils/api_usage";
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
  let books = useLoaderData() as Book[];
  const user = useUserContext();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <BooksSkeleton title="Loading" />;
  } else if (navigation.state === "submitting") {
    return <BooksSkeleton title="Submitting" />;
  } else {
    return (
      <main className="max-w-4xl sm:max-w-xl lg:max-w-4xl  mx-auto dark:bg-[#191919] dark:text-[#c7c7c7] ">
        <div className="hidden md:inline">
          <Categories />
        </div>
        <div className="dark:bg-[#191919]">
          <h1 className="text-4xl lg:text-6xl  font-bold text-appcolor dark:bg-[#191919] text-center pt-10">
            {user?.username && <span> Hi {user.username},</span>} Welcome to the
            Books Dukaan
          </h1>
          <DisplayBooks books={books} />
        </div>
      </main>
    );
  }
};

export default HomePage;

export async function loader() {
  const res = await axios.get(`${API}/books`);
  const books = await res.data;
  return books;
}
