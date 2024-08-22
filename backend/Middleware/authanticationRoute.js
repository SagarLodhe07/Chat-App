import JWT from "jsonwebtoken";
import User from "../Model/usermodel.js";

export const AuthRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthrazied , No Token Provided" });
    }
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthrazied ,Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in AuthRoute Controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
