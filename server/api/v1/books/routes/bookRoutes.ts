import express from "express";
import { books } from "../data/books";
// initialising the Router
const router = express.Router();

router.get("/", (req, res) => {
  res.json(books);
});

router.get("mybooks", (req, res) => {
  res.json(books);
});

router.get("*", (req, res) => {
  res.send("book routes error");
});

export default router;
