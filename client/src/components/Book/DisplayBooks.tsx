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
      className="flex flex-wrap py-10 items-center justify-center gap-6 max-w-lg
       sm:max-w-xl lg:max-w-4xl  mx-auto
  "
    >
      {displayBooks}
    </main>
  );
};
export default DisplayBooks;
