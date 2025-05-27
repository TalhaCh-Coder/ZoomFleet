import { useState } from "react";
import "../../../src/common.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();
   const dummyEmail = "talhaahmeduni022@gmail.com";
   const dummyPassword = "Pk1947@#$";

   function handleSubmition(e) {
      e.preventDefault();
      if (!email.trim() || !password.trim()) {
         setError("Please enter both email and password!");
         return;
      } else if (email === dummyEmail && password === dummyPassword) {
         console.log("Login Successfully!");
         navigate("/home");
         return;
      } else {
         setError("Invalid email or password!Register for a new account.");
      }
   }

   return (
      <div className="wrapper-div">
         <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmition} className="login-form">
               <label htmlFor="email" className="login-label">
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  className="login-input"
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
               />
               <label htmlFor="password" className="login-label">
                  Password
               </label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  className="login-input"
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
               />
               {error && <p className="error-message">{error}</p>}
               <button
                  type="submit"
                  className="coloredButton login-btn-modifier"
               >
                  Login
               </button>
            </form>
         </div>
         <div className="registry-link-container">
            <Link to={"/register"} className="link-to-register">
               Register for a new Account
            </Link>
         </div>
      </div>
   );
}

export default Login;
