import User from "../Model/usermodel.js";
import bcrypt from "bcrypt";
import { generateTokenSetCoookie } from "../Utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const {
      mobileNumber,
      username,
      confirmpassword,
      fullname,
      gender,
      profileImage,
      password,
    } = req.body;
    if (password != confirmpassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const existMoblieNumber = await User.findOne({ mobileNumber });
    if (existMoblieNumber) {
      return res.status(400).json({ error: "Mobile Number Already in Use" });
    }

    const existUsername = await User.findOne({ username });
    if (existUsername) {
      return res.status(400).json({ error: "Username Already in Use" });
    }

    // Hash Password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const malePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = User({
      mobileNumber,
      username,
      fullname,
      gender,
      password: hashPassword,
      profileImage: gender == "Male" ? malePic : girlPic,
    });

    await newUser.save();
    generateTokenSetCoookie(newUser._id, res);
    return res.status(201).json({
      success: true,
      message: "Successfully created User",
      data: newUser,
      error: {},
    });
  } catch (error) {
    console.log("From Sign In Fucntion", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    const user = await User.findOne({ mobileNumber });
    const isPasswordMatch = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // User with given Mobilenumber
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Password don't match" });
    }

    generateTokenSetCoookie(user._id, res);

    return res.status(200).json({
      message: "Login Successfully",
      data: user,
      error: {},
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Successfully log out" });
  } catch (error) {
    console.log("Error in Log Out Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
