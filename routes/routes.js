import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "../database/connect.js"; // Connecting to Database
import User from "../database/models/users.js";

// Middlewares - Use only one isAuthenticated to check for logins and isAdmin to check if user is admin
import isAuthenticated from "../middlewares/isauthencated.js";
import isAdmin from "../middlewares/isadmin.js";

const router = express.Router();

// Get routes
router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  const loginError = req.flash("loginError")
  res.render("login", {
    errorMessage: loginError,
  });
});

router.get("/signup", (req, res) => {
  const signupError = req.flash("signupError")
  res.render("signup", {
    errorMessage: signupError,
  });
});

router.get("/logout", (req, res) => {
  res.cookie("userLoginToken", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

// Post routes



router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let searchUser = await User.findOne({ email: email });
  if (!searchUser) {
    req.flash("loginError", `You don't have an account, Kindy Signup first`);
    res.redirect('/login')
  } else {
    const verifyPassword = await bcrypt.compare(password, searchUser.password);
    if (!verifyPassword) {
      req.flash("loginError", "Password didn't matched");
      res.redirect('/login')
    } else {
      const userLoginToken = jwt.sign(
        { _id: searchUser._id },
        process.env.JWT_BUFFER
      );
      res.cookie("userLoginToken", userLoginToken, {
        expires: new Date(Date.now() + 60 * 10000),
      });
      res.redirect('/')
    }
  }
});

router.post('/signup', async (req, res) => {
  const {email, username, password} = req.body;
  let searchUserByEmail = await User.findOne({email: email});
  let searchUserByUsername = await User.findOne({username: username})
  if(searchUserByEmail){
    req.flash("signupError", "Email already exists")
    return res.redirect('/signup')
  }
  else if(searchUserByUsername){
    req.flash("signupError", "Username already exists")
    return res.redirect('/signup')
  } else{
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      username,
      email,
      password: hashedPassword
    });
    const userLoginToken = jwt.sign({_id : createUser._id}, process.env.JWT_BUFFER)
    res.cookie("userLoginToken", userLoginToken, {
      expires: new Date(Date.now() + 60 * 10000),
    });
    res.redirect('/')
  }
})

export default router;
