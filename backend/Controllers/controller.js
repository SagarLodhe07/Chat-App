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

    if (newUser) {
      generateTokenSetCoookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        // success: true,
        // message: "Successfully created User",
        // data: newUser,
        // error: {},

        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profileImage: newUser.profileImage,
      });
    } else {
      res.status(400).json({ error: "Invaild User Data." });
    }
  } catch (error) {
    console.log("From Sign In Fucntion", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { mobileNumber, password } = req.body;
    const user = await User.findOne({ mobileNumber });
    // console.log(user);
    
    const isPasswordMatch = await bcrypt.compare(
      password,
      user?.password || ""
    );

    // User with given Mobilenumber
    if (!user) {
      return res.status(400).json({ error: "Invalid User" });
    }
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Password do not match" });
    }

    generateTokenSetCoookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profileImage: user.profileImage,
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
