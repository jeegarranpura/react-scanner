const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const secretKey = require('../config/server-confing');

router.post("/register", Register);
router.post("/login", login);

async function Register(req, res, next) {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.status(401).json({
        message: "User Already existed.",
      });
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = User({ ...req.body, password: passwordHash });
      const data = await user.save();
      res.status(200).json({
        message: "Record insterted sucessfully",
        data: data,
        status: 200,
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "err",
      err: err,
    });
    console.log("err", err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
        const passwordMatch = await bcrypt.compare(password, existUser.password);
        if (!passwordMatch) {
            res.status(401).json({
                message: 'Authentication failed!'
            })
        } else {
            const token = jwt.sign({
                user_email: existUser.email
            }, secretKey, {
                expiresIn: '1h'
            });
            res.status(200).json({
                message: 'Login Sucessfully!',
                data: {
                    token: token,
                    email: existUser.email
                }
            })
        }
    } else {
        res.status(401).json({
            message: 'User not exist'
        })
        console.log();
    }
  } catch (err) {}
}

module.exports = router;
