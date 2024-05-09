// // pages/api/loginUser.js

// import UserModel from "./userModel"; // Import your UserModel

// export default async function handler(req, res) {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.authenticateUser(email, password);
//     if (user) {
//       // If login is successful
//       console.log("authenticate login function",user)
//       res.status(200).json(user);
//     } else {
//       // If login fails (invalid credentials)
//       console.log("failes login")
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

import UserModel from "./userModel"; // Import your UserModel
import { generateToken } from "../../../lib/auth"; // Import the generateToken function

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.authenticateUser(email, password);
    console.log("login",user)
    if (user) {
      // If login is successful
      const token = generateToken(user); // Generate token using user data
      console.log("tokrn",token)
      res.status(200).json({ user, token }); // Return user data and token
    } else {
      // If login fails (invalid credentials)
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
