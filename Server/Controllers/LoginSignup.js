import { User } from "../Models/UserModel.js";

export const createUser = async (req, res) => {
  const newUser = new User({ ...req.body });
  try {
    await newUser.save();
    res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
  }
};

export const sendOtp = (req, res) => {
  const { mobileNumber } = req.body;
  const otp = Math.floor(Math.random() * 10000);
  const message = `Your OTP is ${otp}`;
  res.status(200).json({
    message: `OTP Sent successfully on ${mobileNumber}`,
    message,
  });
};

export const getAllUsers = (req, res) => {
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
