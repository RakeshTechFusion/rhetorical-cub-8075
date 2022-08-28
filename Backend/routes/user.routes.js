const Router = require("express");
const {
  getAllUsers,
  createUser,
  loginUser,
  logoutUser,
  getUserById,
  updateUser,
  deleteUser,
  sendOtp,
} = require("../Controllers/user.controller");
const router = Router();
router.get("/", getAllUsers);
router.post("/register", createUser);
router.post("/sendOTP", sendOtp);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
