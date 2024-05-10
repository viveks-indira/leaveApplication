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
    console.log("home token", token);
    if (!token) {
      router.push("/login/page");
    } else {
      const decoded = verifyToken(token);
      console.log("inside verify decoded", decoded);
      if (!decoded) {
        router.push("/login/page");
      }
    }
  }, []);
  // Mock isAdmin state (replace with actual logic to determine admin status)
  const isAdmin = true; // Change to false if the user is not an admin

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Render admin dashboard section if the user is an admin */}
      {isAdmin && (
        <div>
          <h1>Admin Dashboard</h1>
          <br />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{
              border: "none",
              backgroundColor: "#727272",
              padding: "10px",
            }}
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
