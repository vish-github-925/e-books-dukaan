import express from "express";

// initialising the router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User routes");
});

router.get("/login ", (req, res) => {
  res.send("User routes login");
});

router.get("*", (req, res) => {
  res.send("User routes error");
});

export default router;
