import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    mobileNumber: {
      type: String,
      required: [true, "Mobile Number is required"],
      unique: [true, "Phone number is already in Use"],
      trim: true,
      minlength: [10, "Phone number should be length 10"],
      maxlength: [10, "Phone number should be length 10"],
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
