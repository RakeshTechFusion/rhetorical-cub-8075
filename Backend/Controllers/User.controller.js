const jwt = require("jsonwebtoken");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const User = require("../models/user.model");
exports.createUser = (req, res) => {
  const { firstName, lastName, email, mobileNumber } = req.body;
  const AccessToken = jwt.sign(
    { firstName, lastName, email, mobileNumber },
    process.env.ACCESS_TOKEN,
    { expiresIn: "15m" }
  );
  const RefreshToken = jwt.sign(
    { firstName, lastName, email, mobileNumber },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  const user = new User({
    firstName,
    lastName,
    email,
    mobileNumber,
    AccessToken,
    RefreshToken,
  });
  user.save();
  res.status(200).json({
    message: "User created successfully",
    AccessToken,
    RefreshToken,
  });
};
exports.sendOtp = (req, res) => {
  const { mobileNumber } = req.body;
  const otp = Math.floor(Math.random() * 10000);
  const message = `Your OTP is ${otp}`;
  client.messages
    .create({
      body: message,
      to: mobileNumber,
      from: "+13854386867",
    })
    .then((message) => console.log(message.sid))
    .done();
  res.status(200).json({
    message: "OTP sent successfully",
    otp,
  });
};
exports.verifyOtp = (req, res) => {
  const { otp } = req.body;
  const { mobileNumber } = req.body;
  User.findOne({ mobileNumber }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      if (otp == user.otp) {
        res.status(200).json({
          message: "OTP verified successfully",
        });
      } else {
        res.status(400).json({
          message: "OTP not verified",
        });
      }
    }
  })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server error",
      });
    })
    .then(() => {
      User.findOneAndUpdate(
        { mobileNumber },
        { $set: { otp: null } },
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
              message: "OTP verified successfully",
            });
          }
        }
      ).catch((err) => {
        res.status(500).json({
          message: "Internal server error",
        });
      });
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
  jwt.verify(AccessToken,  process.env.ACCESS_TOKEN, (err, decoded) => {
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
