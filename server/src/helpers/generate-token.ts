import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  return jwt.sign({ id }, `${process.env.JWT_TOKEN}`, {
    expiresIn: "24h",
  });
};

export default generateToken;
