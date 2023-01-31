import express from "express";
import dotenv from "dotenv";
import userRoutes from "./api/v1/users/routes/userRoutes";
import bookRoutes from "./api/v1/books/routes/bookRoutes";

// connecting .env
dotenv.config();

//  initialising app
const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/books/", bookRoutes);

app.use("/api/v1/users/", userRoutes);

app.use("*", (req, res) => {
  res.send("error page");
});

// creating port variable
const PORT = process.env.PORT;

// serving the app
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
