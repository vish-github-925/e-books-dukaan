import express from "express";
import {
  getAllBooks,
  getBooksByCategory,
  getBooksById,
} from "../controllers/bookController";
// initialising the Router
const router = express.Router();

router.get("/", getAllBooks);
router.get("/category/:categoryName", getBooksByCategory);
router.get("/:id", getBooksById);

export default router;
