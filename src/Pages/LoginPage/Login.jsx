import { useState, useEffect } from "react";
import "../../../src/common.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ setLoggedInUser }) {
   const [users, setUsers] = useState([]);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();
   const adminEmail = "admin@zoomfleet.com";
   const adminPassword = "admin123";

   useEffect(() => {
      fetch("https://car-rental-backend-production-2b49.up.railway.app/users")
         .then((res) => res.json())
         .then((data) => setUsers(data))
         .catch((err) => console.log(err));
   }, []);

   function handleSubmition(e) {
      e.preventDefault();
      if (!email.trim() || !password.trim()) {
         setError("Please enter both email and password!");
         return;
      }
      if (email.trim() === adminEmail && password === adminPassword) {
         const adminUser = {
            email: adminEmail,
            password: adminPassword,
            isAdmin: true,
         };
         setError("");
         localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
         setLoggedInUser(adminUser);
         console.log("Admin");
         navigate("/homeForAdmin");
         return;
      } else {
         const matchedUser = users.find(
            (user) => user.email === email && user.password === password
         );
         if (matchedUser) {
            console.log("Login Successfully!");
            localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
            setLoggedInUser(matchedUser);
            navigate("/home", { state: { user: matchedUser } });
            return;
         } else {
            setError("Invalid credentials. New user? Register now.");
         }
      }
   }

   return (
      <div className="parent-for-bg-img">
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
                        setError("");
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
                        setError("");
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
      </div>
   );
}

export default Login;
