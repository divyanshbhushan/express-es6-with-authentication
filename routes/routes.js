import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "../database/connect.js"; // Connecting to Database
import User from "../database/models/users.js";

// Middlewares
import isAuthenticated from "../middlewares/isauthencated.js";
import isAdmin from "../middlewares/isadmin.js";

const router = express.Router();

// Get routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  const loginError = req.flash("loginError")
  res.render("login", {
    errorMessage: loginError,
  });
});

// Post routes

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const searchUser = await User.findOne({ email: email });
  if (!searchUser) {
    req.flash("loginError", `You don't have an account, Kindy Signup first`);
    res.redirect('/login')
  } else {
    const verifyPassword = await bcrypt.compare(password, searchUser.password);
    if (!verifyPassword) {
      req.flash("loginError", "Password didn't matched");
    } else {
      const userLoginToken = jwt.sign(
        { _id: searchUser._id },
        process.env.JWT_BUFFER
      );
      res.cookie("userLoginToken", userLoginToken, {
        expires: new Date(Date.now() + 60 * 1000),
      });
      res.redirect('/')
    }
  }
});

export default router;
