import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
