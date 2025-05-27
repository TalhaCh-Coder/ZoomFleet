import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "../../../src/common.css";

function Register() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !password.trim()) {
         setError("Please fill all the input fields!");
         return;
      }
      // else if (here we will apply a condition to check if user already exists or not) {
      //    ...
      // }
      fetch("http://localhost:4000/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: name,
            email: email,
            password: password,
         }),
      })
         .then((response) => {
            if (response.ok) {
               navigate("/");
               console.log("Register Successfully!");
            } else {
               setError("Registration failed! Please try again.");
            }
         })
         .catch((error) => {
            setError(error);
         });
   };

   return (
      <div className="register-container">
         <h2 className="register-title">Register</h2>
         <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="register-label">
               Full Name
            </label>
            <input
               type="text"
               id="name"
               name="name"
               className="register-input"
               value={name}
               onChange={(e) => {
                  setName(e.target.value);
               }}
               required
            />

            <label htmlFor="email" className="register-label">
               Email
            </label>
            <input
               type="email"
               id="email"
               name="email"
               className="register-input"
               value={email}
               onChange={(e) => {
                  setEmail(e.target.value);
               }}
               required
            />

            <label htmlFor="password" className="register-label">
               Password
            </label>
            <input
               type="password"
               id="password"
               name="password"
               className="register-input"
               value={password}
               onChange={(e) => {
                  setPassword(e.target.value);
               }}
               required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="coloredButton">
               Register
            </button>
         </form>
      </div>
   );
}

export default Register;
