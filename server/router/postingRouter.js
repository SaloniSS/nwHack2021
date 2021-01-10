const express = require("express");
const router = express.Router();
const {
  getPostings,
  getPosting,
  addPosting,
  deletePosting,
} = require("../controller/postingController");

router.route("/").get(getPostings).post(addPosting);

router.route("/:id").get(getPosting).delete(deletePosting);

module.exports = router;
