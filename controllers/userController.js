import User from "../models/user.js";
import mongoose from "mongoose";

export const register = async (req, res) => {
  console.log("register user");
  const newUser = new User(
    {
      _id: new mongoose.Types.ObjectId(),
      username: "priyankarad dssf asela",
      email: "priyand.sliit@gmail.com",
      mobileNumber: "0712345678",
      password: "123456789",
      firstName: "priyakara",
      lastName: "senarathne",
      address: "Matale",
    },
    { timestamps: true }
  );
  console.log(newUser);
  try {
    const savedUser = newUser.save().then((res) => console.log(res));
    res.status(201).json(savedUser);
    console.log("User saved successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log("error occured while saving user");
  }
};
