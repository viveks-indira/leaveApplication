// import { useState } from "react";

// export default function HomePage() {
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
//     // Here you can add the logic to send the email using a backend API
//     console.log("Sending email:", formData);
//     // You can reset the form after sending the email
//     setFormData({
//       to: "",
//       cc: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="container" style={{ border: "2px solid black",width:"70%" ,marginLeft:"50%" ,marginRight:"10%" ,textAlign: "left"}}>
//       <h1>Welcome to Home page</h1>
//       <div className="email-form">
//         <div className="email-fields">
//           <div className="form-group">
//             <label htmlFor="to">To:</label>
//             <input
//               type="email"
//               id="to"
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="cc">CC:</label>
//             <input
//               type="email"
//               id="cc"
//               name="cc"
//               value={formData.cc}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="subject">Subject:</label>
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button className="send-button" type="submit" onClick={handleSubmit}>Send</button>
//       </div>
//       <style jsx>{`
//         .email-form {
//           display: flex;
//           flex-direction: column;
//         }
//         .email-fields { 
//           padding:10px;
//           flex-wrap: wrap;
//           gap: 10px; 
//         }
//         .form-group {
//           flex: 1;
//         }
//         .send-button {
//           align-self: center;
//           padding: 8px 20px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .send-button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    // Here you can add the logic to send the email using a backend API
    console.log("Sending email:", formData);
    // You can reset the form after sending the email
    setFormData({
      to: "",
      cc: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    // Check if user is authenticated on component mount
    const token = localStorage.getItem("token");
    if (!token) {
      // If token is not present, redirect to login page
      router.push("/login/page");
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container">
      <h1>Welcome to Home page</h1>
      {/* Your email form JSX */}
      <style jsx>{`
        /* Your CSS styles */
      `}</style>
    </div>
  );
}
