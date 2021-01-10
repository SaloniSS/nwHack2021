const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  getUser,
  deleteUser,
} = require("../controller/userController");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
