const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
  addComment,
  getUserPhone,
} = require("../controller/userController");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

router.route("/caption/:id").patch(addComment);

router.route("/phone/:phone").get(getUserPhone);

module.exports = router;
