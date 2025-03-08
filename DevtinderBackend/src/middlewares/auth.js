const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "a4f83c9db6c4b167b1c8fbd7d8b95a3f9e22b0d7f6a3c1e7d5a2f6e9d1b3a4f5";

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login!");
    }

    const decodedObj = await jwt.verify(token, JWT_SECRET);

    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports = {
  userAuth,
};
