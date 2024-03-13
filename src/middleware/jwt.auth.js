import jwt from "jsonwebtoken";

export async function JWTAuth(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return res.json("user not authorized");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.json("user not authorized");
  }
}
