import express from "express";
import dotenv from "dotenv";
import userRoutes from "./api/v1/users/routes/userRoutes";
import bookRoutes from "./api/v1/books/routes/bookRoutes";
import colors from "colors";
import errorMiddleware from "./api/v1/middleware/errorMiddleware";
import cors from "cors";
import { connectDB } from "./api/config/dbConn";
// connecting .env
dotenv.config();
connectDB();

//  initialising app
const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/v1/books/", bookRoutes);

app.use("/api/v1/users/", userRoutes);

// app.get("*", (req, res) => {
//   res.send("error page");
// });

// creating port variable
const PORT = process.env.PORT;

// using error middleware
app.use(errorMiddleware);
// serving the app
app.listen(PORT, () => {
  console.log(
    colors.green.underline(`Server is running on http://localhost:${PORT}`)
  );
});
