import JWT from "jsonwebtoken";

export const generateTokenSetCoookie =  (userId, res) => {
  const token =  JWT.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "devlopment",
  });
};
