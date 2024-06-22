import UserModel from "../models/Users.js";

const createUser = (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
  console.log("new user created");
};

export default { createUser };
