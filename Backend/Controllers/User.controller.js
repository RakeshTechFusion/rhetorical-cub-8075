const jwt = require("jsonwebtoken");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const User = require("../models/user.model");
exports.createUser = async (req, res) => {
  const newUser = new User({ ...req.body });

  try {
    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (err) {
    console.log(err);
  }
};
exports.sendOtp = (req, res) => {
  const { mobileNumber } = req.body;
  const otp = Math.floor(Math.random() * 10000);
  const message = `Your OTP is ${otp}`;
  res.status(200).json({
    message: `OTP Sent successfully on ${mobileNumber}`,
    message,
  });
};
exports.loginUser = (req, res) => {
  const { email } = req.body;
  const { mobileNumber } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (mobileNumber == user.mobileNumber) {
        const AccessToken = jwt.sign({ email, mobileNumber }, "secret", {
          expiresIn: "1h",
        });
        const RefreshToken = jwt.sign({ email, mobileNumber }, "secret", {
          expiresIn: "1d",
        });
        res.status(200).json({
          message: "User logged in successfully",
          AccessToken,
          RefreshToken,
        });
      } else {
        res.status(400).json({
          message: "User not found",
        });
      }
    }
  });
};
exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "User found successfully",
        user,
      });
    }
  })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
      });
    })
    .then(() => {
      User.findByIdAndUpdate({ id }, { $set: { otp: null } }, (err, user) => {
        if (err) {
          res.status(500).json({
            message: "Internal server error",
          });
        } else if (!user) {
          res.status(404).json({
            message: "User not found",
          });
        } else {
          res.status(200).json({
            message: "OTP verified successfully",
          });
        }
      }).catch((err) => {
        res.status(500).json({
          message: "Internal server error",
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
      });
    })
    .then(() => {
      User.findByIdAndUpdate({ id }, { $set: { otp: null } }, (err, user) => {
        if (err) {
          res.status(500).json({
            message: "Internal server error",
          });
        } else if (!user) {
          res.status(404).json({
            message: "User not found",
          });
        } else {
          res.status(200).json({
            message: "OTP verified successfully",
          });
        }
      });
    });
};
exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!users) {
      res.status(404).json({
        message: "No users found",
      });
    } else {
      res.status(200).json({
        message: "Users found successfully",
        users,
      });
    }
  });
};
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, mobileNumber } = req.body;
  User.findByIdAndUpdate(
    { id },
    { $set: { firstName, lastName, email, mobileNumber } },
    (err, user) => {
      if (err) {
        res.status(500).json({
          message: "Internal server error",
        });
      } else if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      } else {
        res.status(200).json({
          message: "User updated successfully",
        });
      }
    }
  )
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
      });
    })
    .then(() => {
      User.findByIdAndUpdate({ id }, { $set: { otp: null } }, (err, user) => {
        if (err) {
          res.status(500).json({
            message: "Internal server error",
          });
        } else if (!user) {
          res.status(404).json({
            message: "User not found",
          });
        } else {
          res.status(200).json({
            message: "OTP verified successfully",
          });
        }
      });
    });
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete({ id }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json({
        message: "User deleted successfully",
      });
    }
  });
};
exports.logoutUser = (req, res) => {
  const { AccessToken } = req.headers;
  jwt.verify(AccessToken, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        message: "User logged out successfully",
      });
    }
  });
};
