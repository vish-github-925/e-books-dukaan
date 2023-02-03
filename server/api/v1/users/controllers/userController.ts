import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

const login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // check if all fields are entered
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  //  check if user exist in the database
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // compare passwords
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user._id,
      username,
      email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  // check if all fields are entered
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  //  check if user exist in the database
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(304);
    throw new Error("User already exists");
  }

  //   if not a user already, register the user
  //   hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, username, password: hashedPassword });
  res.status(200).json({
    id: user._id,
    email,
    username,
  });
});
export { login, register };
