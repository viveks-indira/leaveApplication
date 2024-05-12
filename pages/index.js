// pages/index.js

import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="containerIndex">
  <h1 className="title">Welcome to our Application</h1>
  <div className="button-container">
    <div className="button">
      <h2>Login</h2>
      <Link href="/login/page">
        <button className="login-button">Login</button>
      </Link>
    </div>
    <div className="button">
      <h2>Register</h2>
      <Link href="/register/page">
        <button className="login-button">Register</button>
      </Link>
    </div>
  </div>
  <style jsx>{`
        .containerIndex {
          border: 2px solid black;
          margin: 12% auto;
          padding: 20px;
          max-width: 400px;
          text-align: center;
          border-radius: 10px;
        }
        .title {
          margin-bottom: 20px;
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .button {
          flex: 1;
          padding: 5px
        }
        .login-button {
          width: 100%;
          margin-top: 2px;
          padding: 8px 20px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          font-size: 16px;
        }
        .login-button:hover {
          background-color: #0056b3;
        }
      `}</style>
</div>
  );
}
