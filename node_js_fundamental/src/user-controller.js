import User from "./user-model.js";

// const users = [
//   { id: 1, name: "Ivan" },
//   { id: 2, name: "Vasya" },
// ];

const getUsers = async (req, res) => {
  //   console.log(req.params);
  // if (req.params.id) {
  //   return res.send(users.find((user) => user.id == req.params.id));
  // }
  let users;
  if (req.params.id) {
    users = await User.findById(req.params.id);
  } else {
    users = await User.find();
  }
  res.send(users);
};

const createUser = async (req, res) => {
  // console.log(req.body);
  // const user = req.body;
  // users.push(user);

  const user = await User.create(req.body);
  res.send(user);
};

export default { getUsers, createUser };
