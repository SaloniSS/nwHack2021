const User = require("../model/userModel");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      payload: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body });

    return res.status(201).json({
      success: true,
      payload: user,
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

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    await User.deleteOne({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      payload: user[0],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    if (req.body.Name != null) {
      await User.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Name: req.body.Name,
          },
        }
      );
    }

    if (req.body.Email != null) {
      await User.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Email: req.body.Email,
          },
        }
      );
    }

    if (req.body.Password != null) {
      await User.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Password: req.body.Password,
          },
        }
      );
    }

    if (req.body.Phone != null) {
      await User.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Phone: req.body.Phone,
          },
        }
      );
    }

    if (req.body.Rating != null) {
      await User.findById(req.params.id).updateOne(
        {},
        {
          $set: {
            Rating: {
              sum: req.body.Rating.sum,
              number: req.body.Rating.number,
            },
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addComment = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || user.length == 0) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    newComment = req.body.Comment;
    oldComments = user.Comments;
    console.log(user);
    console.log(oldComments);
    user.Caption = oldComments.push(newComment);
    user.save();

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
