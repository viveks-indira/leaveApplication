import bcrypt from "bcrypt";
import { generateToken } from "../../../lib/auth";
import UserModel from "./userModel";

export default async function handler(req, res) {
  console.log("inside login route")
  try {
    const { email, password } = req.body;
    const user = await UserModel.getUserByEmail(email);

    if (user) {
      // Compare hashed password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      console.log("Matched",isPasswordMatch)
      if (isPasswordMatch) {
        // Passwords match, generate token
        const token = generateToken(user);
         console.log("generate token",token)
         res.status(200).json({ user, token });
      } else {
        // Passwords don't match
        res.status(401).json({ message: "Invalid email or hashpassword" });
      }
    } else {
      console.log("login error" )
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

