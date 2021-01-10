const Posting = require("../model/postingModel");

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
    const posting = await Posting.create({ ...req.body });

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
