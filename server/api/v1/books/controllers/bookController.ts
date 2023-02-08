import asyncHandler from "express-async-handler";

import {
  AdventureBooks,
  AllBooks,
  ClassicBooks,
  CrimeBooks,
  HomePageBooks,
  HorrorBooks,
  HumorBooks,
} from "../data/books";

export const getAllBooks = asyncHandler(async (req, res) => {
  res.json(HomePageBooks);
});

export const getBooksByCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.params;
  switch (categoryName) {
    case "horror": {
      return res.json(HorrorBooks);
    }
    case "crime": {
      return res.json(CrimeBooks);
    }
    case "humor": {
      return res.json(HumorBooks);
    }
    case "classics": {
      return res.json(ClassicBooks);
    }
    case "adventure": {
      return res.json(AdventureBooks);
    }
  }
  // const booksByCategory = books.filter((book) => {
  //   if (book.category == categoryName) return book;
  // });
  // res.json(booksByCategory);
});
export const getBooksById = asyncHandler(async (req, res) => {
  const { category, id } = req.params;
  const book = AllBooks.filter((book) => book.category === category).filter(
    (book) => book.id === +id
  );
  // console.log(book);
  res.json(book);
});
