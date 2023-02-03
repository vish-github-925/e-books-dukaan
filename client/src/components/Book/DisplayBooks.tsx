import BookComponent from "./BookComponent";

const DisplayBooks = ({ books }) => {
  const displayBooks = books.map((book) => (
    <BookComponent book={book} key={book.id} />
  ));
  return <>{displayBooks}</>;
};
export default DisplayBooks;
