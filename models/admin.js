import mongoos from "mongoose";

const adminschema = mongoos.Schema({
  _id: mongoos.Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true, unique: true },
});

const admin = mongoos.model("admin", adminschema);
export default admin;
