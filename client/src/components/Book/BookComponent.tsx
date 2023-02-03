import Button from "../Button";
import BookItem from "./BookItem";
import { useCartItemsDispatch } from "../../context/CartContextProvider";
type BookProps = {
  book: Book;
};

type Book = {
  title: string;
  author: string;
  price: number;
  discount: number;
  category: string;
};

const BookComponent = ({ book }: BookProps) => {
  const dispatch = useCartItemsDispatch();
  return (
    <div className="rounded-lg bg-slate-200 h-2/3 w-[250px] flex flex-col items-center gap-4 text-black font-semibold hover:scale-105 cursor-pointer transition-all delay-100">
      <BookItem book={book} />
      <div className="flex items-center space-x-4">
        <button
          className="bg-violet-700 hover:bg-violet-900 hover:text-white px-3 py-2 rounded-3xl text-sm"
          onClick={() =>
            dispatch({
              type: "add_to_cart",
              book,
            })
          }
        >
          Add to cart
        </button>
        <Button>Buy</Button>
      </div>
    </div>
  );
};
export default BookComponent;
