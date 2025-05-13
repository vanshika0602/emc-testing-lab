const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/usersModel");
const { doHashValidation } = require("../utils/hashing");

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


// ✅ SIGNUP FUNCTION
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const { error } = signupSchema.validate({ email, password });

  if (error) {
    return res.status(400).json({ success: false, message: error.details[0].message });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });
    const result = await newUser.save();

    const userWithoutPassword = {
      _id: result._id,
      email: result.email,
    };

    return res.status(201).json({
      success: true,
      message: "Your account has been created successfully",
      user: userWithoutPassword,
    });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { error } = signinSchema.validate({ email, password });
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email }).select("+password");
    if (!existingUser) {
      return res.status(409).json({ success: false, message: "User does not exist!" });
    }

    const result = await doHashValidation(password, existingUser.password);
    if (!result) {
      return res.status(401).json({ success: false, message: "Invalid credentials!" });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }    

    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    

    res
      .json({
        success: true,
        token,
        message: "Logged in successfully",
      });
  } catch (error) {
    console.error("Signin Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
