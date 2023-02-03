import express from "express";
import { login, register } from "../controllers/userController";

// initialising the router
const router = express.Router();

// router.get("/", (req, res) => {
//   res.redirect(req.baseUrl+"/login");
// });
router.post("/login", login);
router.post("/register", register);

// router.get("*", (req, res) => {
//   res.send("User routes error");
// });

export default router;
