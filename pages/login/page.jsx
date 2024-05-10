// import { useState } from "react";
// import { useRouter } from "next/router"; // Import the useRouter hook

// export default function LoginPage() {
//   const router = useRouter(); // Initialize the useRouter hook

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("form data",formData)
//       const response = await fetch("/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log("response ",response.status)
//       if (response.ok) {
//         console.log("logged")
//         // User logged in successfully
      
//       } else {
//         // Handle login error
//         const data = await response.json();
//         console.error("Login error:", data.message);
//         // You can display an error message to the user
//       }
//     } catch (error) {
//       console.error("Login failed:", error.message);
//       // Handle login failure
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="text">
//         <div className="login">
//           <h2 className="text-3xl font-bold mb-4">Login</h2>
//           <br></br>
//           <form className="w-full" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Email
//               </label>
//               <br></br>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 onChange={handleChange}
//                 value={formData.email} // Bind the input value to the state
//                 className="border border-gray-400 p-2"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 onChange={handleChange}
//                 value={formData.password} // Bind the input value to the state
//                 className="border border-gray-400 p-2"
//               />
//             </div>
//             <br></br>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useRouter } from "next/router";
import { generateToken } from "../../lib/auth"; // Import the generateToken function

export default function LoginPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State for login error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // User logged in successfully
        const data = await response.json();
        const token = data.token; // Extract token from response
        localStorage.setItem("token", token); // Store token in local storage
        router.push("/home/page"); // Redirect to home page or dashboard
      } else {
        // Handle login error
        const data = await response.json();
        setError(data.message); // Set login error message
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login failure
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text">
        <div className="login">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          {error && (
            <div className="text-red-500 mb-4">{error}</div> // Display error message
          )}
          <br></br>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="border border-gray-400 p-2"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="border border-gray-400 p-2"
              />
            </div>
            <br></br>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
