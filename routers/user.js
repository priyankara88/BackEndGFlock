const router = require("express").Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const newUser = new User(
    {
      username: "priyankara",
      email: "priyankara.sliit@gmail.com",
      mobileNumber: "0712345678",
      password: "123456789",
      firstName: "priyakara",
      lastName: "senarathne",
      address: "Matale",
    },
    { timestamps: true }
  );

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log("User saved successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log("error occured while saving user");
  }
});

module.exports = router;
