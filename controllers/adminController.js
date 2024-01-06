import Admin from "../models/admin.js";
import mongoose from "mongoose";

export const adminregister = async (req, res) => {
  const newAdmin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    username: "priy",
    address: "test address",
    email: "priya@gmail.com",
    mobileNumber: "123456789",
  });
  console.log(newAdmin);
  try {
    const savedAdmin = newAdmin.save().then((res) => console.log(res));
    res.status(201).json(savedAdmin);
    console.log("User saved successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log("error occured while saving user");
  }
};
