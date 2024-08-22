import User from "../Model/usermodel.js";

export const getAllUser = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filterUser = await User.find({ _id: { $ne: loggedInUser } }).select("-password")

    return res.status(200).json(filterUser);
  } catch (error) {
    console.log("Error in  getAllUser Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
