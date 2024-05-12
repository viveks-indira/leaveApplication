import { useState, useEffect } from "react";
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
  const [userRole, setUserRole] = useState(null); // State to store user role

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
    const email = localStorage.getItem("email");
    if (!token) {
      router.push("/login/page");
    } else {
      const decoded = verifyToken(token);
      if (!decoded) {
        router.push("/login/page");
      } else {
        // Fetch user role based on email
        fetchUserRole(email);
      }
    }
  }, []);

  // Function to fetch user role
  const fetchUserRole = async (email) => {
    try {
      const response = await fetch("/api/users/getRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log("home data role".data);
      setUserRole(data.role); // Set user role state
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  const handleDashboardClick = () => {
    router.push("/admin/dashboard");
  };

  function handleLogout() {
    // Add logic to handle logout
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="navbar">
        <h1>User Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="containerHome">
        <div className="profile">
          <h1>Profile</h1>
          <div className="tableData">
            <table>
              <tbody>
                <tr>
                  <th>Username :</th>
                  <td>JohnDoe</td>
                </tr>
                <tr>
                  <th>Email :</th>
                  <td>johndoe@example.com</td>
                </tr>
                <tr>
                  <th>Phone :</th>
                  <td>123-456-7890</td>
                </tr>
                <tr>
                  <th>Remaining Leave :</th>
                  <td>5 out of 20</td>
                </tr>
              </tbody>
            </table>
          </div>
          {userRole === "admin" && ( // Render the button only if user role is admin
            <div className="adminDashboardButton">
              <h1>Admin Dashboard</h1>
              <button onClick={handleDashboardClick}>Dashboard</button>
            </div>
          )}
        </div>
        <div className="emailTemplate">
          <div className="sendEmail">
            <h2 className="text-3xl font-bold mb-4">Leave Application</h2>
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
    </div>
  );
}

