// pages/index.js

import Link from "next/link";

export default function IndexPage() {
  return (
    <div
      className="container"
      style={{ border: "2px solid black", margin: "12%", textAlign: "center" }}
    >
      <h1>Welcome to our Application</h1>
      <div
        className="login"
        style={{
 
 
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h2  >Login</h2>
        <Link href="/login/page">
          <button
            style={{
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
      <div>
        <h2>Register</h2>
        <Link href="/register/page">
          <span className="link">Register</span>
        </Link>
      </div>
    </div>
  );
}
