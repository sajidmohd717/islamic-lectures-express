import User from "../models/user.model.js";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({name, email, password})
  await newUser.save()
  res.status(201).json("user created successfully")
  console.log("user created successfully")
};

export default { createUser };
