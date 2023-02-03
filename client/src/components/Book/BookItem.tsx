import { Link } from "react-router-dom";

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
const BookItem = ({ book }: BookProps) => {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="rounded-lg px-6 py-4 flex flex-col items-center space-y-2 justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
        <div>
          <p>{book.price}</p>
          <p>{book.discount}</p>
        </div>
        <div>
          <p>{book.category}</p>
        </div>
      </div>
    </Link>
  );
};
export default BookItem;
