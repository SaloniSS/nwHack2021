const mongoose = require("mongoose");
const Posting = require("../model/postingModel");
const User = require("../model/userModel");

exports.getPostings = async (req, res, next) => {
  try {
    const postings = await Posting.find();

    return res.status(200).json({
      success: true,
      count: postings.length,
      payload: postings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getPosting = async (req, res, next) => {
  try {
    const posting = await Posting.findById(req.params.id);

    if (!posting || posting.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No posting found",
      });
    }

    return res.status(200).json({
      success: true,
      posting: posting,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addPosting = async (req, res, next) => {
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();

    const posting = await Posting.create([{ ...req.body }], { session: sess });

    try {
      searchUser = await User.findById(posting[0].User);
    } catch (err) {
      posting[0].remove();

      return res.status(404).json({
        success: false,
        error: "Posting author not found so removed the post",
      });
    }

    user = searchUser;
    user.Postings.push(mongoose.Types.ObjectId(posting[0]._id));

    await user.save({ session: sess });
    sess.commitTransaction();

    return res.status(201).json({
      success: true,
      payload: posting,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deletePosting = async (req, res, next) => {
  try {
    const posting = await Posting.findById(req.params.id);

    if (!posting || posting.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No posting found",
      });
    }

    await Posting.deleteOne({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      payload: posting,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.updatePosting = async (req, res, next) => {
  try {
    const posting = await Posting.findById(req.params.id);

    if (!posting || posting.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No posting found",
      });
    }

    if (req.body.User != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            User: req.body.User,
          },
        }
      );
    }

    if (req.body.Title != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Title: req.body.Title,
          },
        }
      );
    }

    if (req.body.Description != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Description: req.body.Description,
          },
        }
      );
    }

    if (req.body.Value != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Value: req.body.Value,
          },
        }
      );
    }

    if (req.body.Employee != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Employee: req.body.Employee,
          },
        }
      );
    }

    if (req.body.Applicants != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Applicants: req.body.Applicants,
          },
        }
      );
    }

    if (req.body.Location != null) {
      await Posting.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Location: req.body.Location,
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      posting: posting,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getUserPosting = async (req, res) => {
  try {
    const postings = await Posting.find({ User: req.params.userid });

    return res.status(200).json({
      success: true,
      count: postings.length,
      payload: postings,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
