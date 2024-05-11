// import { useState,useEffect  } from "react";
// import { useRouter } from "next/router";
// import { verifyToken } from "../../lib/auth";

// export default function HomePage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     to: "",
//     cc: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sending email:", formData);
//     // Implement your logic to send the email here
//     setFormData({
//       to: "",
//       cc: "",
//       subject: "",
//       message: "",
//     });
//   };
 
 
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log("home token", token);
//     if (!token) {
//       router.push("/login/page");
//     } else {
//       const decoded = verifyToken(token);
//       console.log("inside verify decoded", decoded);
//       if (!decoded) {
//         router.push("/login/page");
//       }
//     }
//   }, []);

//   const handleDashboardClick = () => {
//     // Redirect the user to the desired route ("/dashboard" in this example)
//     router.push("/admin/dashboard");
//   };

//   // Mock isAdmin state (replace with actual logic to determine admin status)
//   const isAdmin = true; // Change to false if the user is not an admin

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       {/* Render admin dashboard section if the user is an admin */}
//       {isAdmin && (
//          <div>
//          <h1>Admin Dashboard</h1>
//          <br />
//          {/* Attach an onClick event handler to the button */}
//          <button
//            type="button" // Specify type="button" to prevent form submission
//            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//            style={{
//              border: "none",
//              backgroundColor: "#727272",
//              padding: "10px",
//            }}
//            onClick={handleDashboardClick} // Call handleDashboardClick function on button click
//          >
//            Dashboard
//          </button>
//        </div>
//       )}
//       <div className="text">
//         <div className="sendEmail">
//           <h2 className="text-3xl font-bold mb-4">Email Template</h2>
//           <form className="w-full" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="to"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 To:
//               </label>
//               <br />
//               <input
//                 type="email"
//                 id="to"
//                 name="to"
//                 onChange={handleChange}
//                 value={formData.to}
//                 className="border border-gray-400 p-2"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="cc"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 CC:
//               </label>
//               <br />
//               <input
//                 type="email"
//                 id="cc"
//                 name="cc"
//                 onChange={handleChange}
//                 value={formData.cc}
//                 className="border border-gray-400 p-2"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="subject"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Subject:
//               </label>
//               <br />
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 onChange={handleChange}
//                 value={formData.subject}
//                 className="border border-gray-400 p-2"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Message:
//               </label>
//               <br />
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="border border-gray-400 p-2"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



//admin

// import { useState,useEffect  } from "react";
// import { useRouter } from "next/router";
// import { verifyToken } from "../../lib/auth";

// export default function HomePage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     to: "",
//     cc: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sending email:", formData);
//     // Implement your logic to send the email here
//     setFormData({
//       to: "",
//       cc: "",
//       subject: "",
//       message: "",
//     });
//   };

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const token = localStorage.getItem("token");
//       const emaildata = localStorage.getItem("email");
//       const passworddata = localStorage.getItem("password");
  
//       console.log("home token", token);
//       console.log("home email", emaildata);
//       console.log("home pass", passworddata);
  
//       // Check if token exists
//       if (!token ) {
//         router.push("/login/page");
//         return; // Stop execution if token or email doesn't exist
//       }
  
//       // Verify token
//       const decoded = verifyToken(token);
//       console.log("inside verify decoded", decoded);
  
//       // If token is invalid, redirect to login page
//       if (!decoded) {
//         router.push("/login/page");
//         return; // Stop execution if token is invalid
//       }
//       const data={
//         email:emaildata,
//         password:passworddata
//       }
//       console.log("home data ",data);
//       // Fetch user information from UserModel
//       try {
//         const response = await fetch("/api/users/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data), // Pass email as an object in the body
//         });

//         console.log("home response ",response)
//         if (response.ok) {
//           const data = await response.json(); // Parse response body as JSON
//           const role = data.role; // Access the role property
//           console.log("Role user:", role);
//         } else {
//           // If the response is not successful, log the error message
//           console.error("Error fetching user information:", response.statusText);
//           // Optionally handle the error or redirect the user
//           // For example, redirect the user to the login page
//           router.push("/login/page");
//         }
//       } catch (error) {
//         console.error("Error fetching user information:", error);
//         // Handle error or redirect user to login page
//         router.push("/login/page");
//       }
//     };
  
//     checkAuthentication();
//   }, []);
  
//   // Mock isAdmin state (replace with actual logic to determine admin status)
//   const isAdmin = true; // Change to false if the user is not an admin

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       {/* Render admin dashboard section if the user is an admin */}
//       {isAdmin && (
//         <div>
//           <h1>Admin Dashboard</h1>
//           <br />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             style={{
//               border: "none",
//               backgroundColor: "#727272",
//               padding: "10px",
//             }}
//           >
//             Dashboard
//           </button>
//         </div>
//       )}
//       <div className="text">
//         <div className="sendEmail">
//           <h2 className="text-3xl font-bold mb-4">Email Template</h2>
//           <form style={{ width: "100%" }} onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="to"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 To:
//               </label>
//               <br />
//               <input
//                 type="email"
//                 id="to"
//                 name="to"
//                 onChange={handleChange}
//                 value={formData.to}
//                 className="border border-gray-400 p-2"
//                 required
//               />
//             </div>
//             {/* Rest of the form fields */}
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               style={{
//                 border: "none",
//                 backgroundColor: "#727272",
//                 padding: "10px",
//               }}
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState,useEffect  } from "react";
import { useRouter } from "next/router";
import { verifyToken } from "../../lib/auth";

export default function HomePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    to: "",
    cc: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending email:", formData);
    // Implement your logic to send the email here
    setFormData({
      to: "",
      cc: "",
      subject: "",
      message: "",
    });
  };
 
 
  useEffect(() => {
    const token = localStorage.getItem("token");
   // console.log("home token", token);
    if (!token) {
      router.push("/login/page");
    } else {
      const decoded = verifyToken(token);
     // console.log("inside verify decoded", decoded);
      if (!decoded) {
        router.push("/login/page");
      }
    }
  }, []);

  const handleDashboardClick = () => {
    // Redirect the user to the desired route ("/dashboard" in this example)
    router.push("/admin/dashboard");
  };

  // Mock isAdmin state (replace with actual logic to determine admin status)
  const isAdmin = true; // Change to false if the user is not an admin

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Render admin dashboard section if the user is an admin */}
      {isAdmin && (
         <div>
         <h1>Admin Dashboard</h1>
         <br />
         {/* Attach an onClick event handler to the button */}
         <button
           type="button" // Specify type="button" to prevent form submission
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           style={{
             border: "none",
             backgroundColor: "#727272",
             padding: "10px",
           }}
           onClick={handleDashboardClick} // Call handleDashboardClick function on button click
         >
           Dashboard
         </button>
       </div>
      )}
      <div className="text">
        <div className="sendEmail">
          <h2 className="text-3xl font-bold mb-4">Email Template</h2>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="to"
                className="block text-gray-700 font-bold mb-2"
              >
                To:
              </label>
              <br />
              <input
                type="email"
                id="to"
                name="to"
                onChange={handleChange}
                value={formData.to}
                className="border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cc"
                className="block text-gray-700 font-bold mb-2"
              >
                CC:
              </label>
              <br />
              <input
                type="email"
                id="cc"
                name="cc"
                onChange={handleChange}
                value={formData.cc}
                className="border border-gray-400 p-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-bold mb-2"
              >
                Subject:
              </label>
              <br />
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
                className="border border-gray-400 p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message:
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-400 p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// //tailwind used
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { verifyToken } from "../../lib/auth"; 

// export default function HomePage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     to: "",
//     cc: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sending email:", formData);
//     // Implement your logic to send the email here
//     setFormData({
//       to: "",
//       cc: "",
//       subject: "",
//       message: "",
//     });
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login/page");
//     } else {
//       const decoded = verifyToken(token);
//       if (!decoded) {
//         router.push("/login/page");
//       }
//     }
//   }, []);

//   const handleDashboardClick = () => {
//     router.push("/admin/dashboard");
//   };

//   const isAdmin = true;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       {isAdmin && (
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             style={{
//               border: "none",
//               backgroundColor: "#727272",
//               padding: "10px",
//             }}
//             onClick={handleDashboardClick}
//           >
//             Dashboard
//           </button>
//         </div>
//       )}
//       <div className="text w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6">
//         <div className="sendEmail">
//           <h2 className="text-3xl font-bold mb-4">Email Template</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="to"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 To:
//               </label>
//               <input
//                 type="email"
//                 id="to"
//                 name="to"
//                 onChange={handleChange}
//                 value={formData.to}
//                 className="border border-gray-400 p-2 w-full"
//                 required
//               />
//             </div>
//             {/* Other form fields */}
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
