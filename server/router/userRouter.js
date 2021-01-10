const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
  addComment,
} = require("../controller/userController");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

router.route("/caption/:id").patch(addComment);

module.exports = router;
