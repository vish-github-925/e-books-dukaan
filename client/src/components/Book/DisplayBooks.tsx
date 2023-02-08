import BookComponent from "./BookComponent";

const DisplayBooks = ({ books }) => {
  const displayBooks = books.map((book) => (
    <BookComponent
      book={book}
      key={String(book.id) + book.category + book.title}
    />
  ));
  return (
    <main
      className="flex flex-wrap items-center p-4 justify-between gap-y-6 max-w-4xl mx-auto
  "
    >
      {displayBooks}
    </main>
  );
};
export default DisplayBooks;
