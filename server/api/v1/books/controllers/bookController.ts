import asyncHandler from "express-async-handler";

import { books } from "../data/books";

export const getAllBooks = asyncHandler(async (req, res) => {
  res.json(books);
});

export const getBooksByCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.params;
  const booksByCategory = books.filter((book) => {
    if (book.category == categoryName) return book;
  });
  res.json(booksByCategory);
});
export const getBooksById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const book = books.filter((book) => book.id === +id);
  // console.log(book);
  res.json(book);
});
