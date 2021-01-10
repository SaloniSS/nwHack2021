const express = require("express");
const router = express.Router();
const { getUsers, addUser, getUser } = require("../controller/userController");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser);

module.exports = router;
