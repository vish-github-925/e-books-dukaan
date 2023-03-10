import Button from "../Button";
import BookItem from "./BookItem";
import {
  useCartItems,
  useCartItemsDispatch,
} from "../../context/CartContextProvider";
import { redirect } from "react-router-dom";
import { useEffect } from "react";
type BookProps = {
  book: Book;
};

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  discount?: number;
  specialDeal?: string;
  category: string;
};

const BookComponent = ({ book }: BookProps) => {
  const dispatch = useCartItemsDispatch();
  const cartItems = useCartItems();
  useEffect(() => {
    redirect("/cart");
  }, [dispatch, cartItems]);
  return (
    <div className="rounded-lg bg-slate-100 dark:bg-[#272727] dark:text-[#c7c7c7] h-[250px] w-[270px] flex  items-center flex-col text-black font-medium hover:scale-105 hover:bg-slate-200 cursor-pointer transition-all delay-100 relative shadow-lg border border-b-teal-400">
      <BookItem book={book} />
      <div className="flex items-center gap-x-4 absolute bottom-6">
        <button
          className="bg-appcolor hover:bg-blue-700 text-white px-3 py-2 rounded-xl text-sm active:bg-blue-800 active:animate-pulse"
          onClick={() =>
            dispatch({
              type: "add_to_cart",
              book,
            })
          }
        >
          Add to cart
        </button>
        {/* <Button>Buy</Button> */}
      </div>
    </div>
  );
};
export default BookComponent;
