// index.js
import bcrypt from "bcrypt";
import UserModel from "./userModel";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await createUser(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

async function createUser(req, res) {
  try {
    const { username, email, password, phone } = req.body;
 
    const hashedPassword = await bcrypt.hash(password, 2);  
 
    const user=await UserModel.createUser(username, email, hashedPassword, phone);

    return res.status(201).send("User created successfully");
  } catch (error) {
    console.log("invalid index")
    return res.status(500).json({ message: error.message });
  }
}
