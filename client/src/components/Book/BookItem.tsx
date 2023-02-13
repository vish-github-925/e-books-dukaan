import { Link } from "react-router-dom";

type BookProps = {
  book: Book;
};

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  specialDeal?: string;
  discount?: number;
  category: string;
};
const BookItem = ({ book }: BookProps) => {
  return (
    <Link to={`/book/${book.category}/${book.id}`}>
      <div className="rounded-lg px-6 py-4 flex flex-col items-center gap-y-2 justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-center mt-6 tracking-normal italic">
            {book.title}
          </h3>
          <h4 className="text-sm mt-1 text-center">Author: {book.author}</h4>
          {book.specialDeal ? (
            <span
              className="px-2 py-1 rounded-lg
         bg-teal-500 text-white text-xs absolute right-6 z-[2]"
            >
              Special Deal
            </span>
          ) : (
            <span
              className="px-2 py-1 rounded-lg
         bg-[#13005A] text-white text-xs absolute right-6 z-[2]"
            >
              Limited Stock
            </span>
          )}
        </div>
        <div>
          <p className="text-xl">
            Price:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "INR",
            }).format(book.price)}
          </p>
        </div>
        <div>
          {book.discount && (
            <p className="text-sm">
              Discount:{" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(book.discount)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
export default BookItem;
