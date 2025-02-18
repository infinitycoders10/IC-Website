import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  await connectDB();

  const { name, email, password, role, passcode } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (role === 'admin' && passcode !== process.env.ADMIN_PASSCODE) {
    return res.status(403).json({ error: "Invalid passcode for admin access" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = new User({ name, email, password: hashedPassword, role });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
  
  if (!token) {
    return res.status(500).json({ error: "Token generation failed" });
  }

  return res.status(200).json({
    message: "Regsitered successfully",
    token, 
    user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
    },
  });
}