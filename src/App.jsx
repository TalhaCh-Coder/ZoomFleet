import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Booking from "./Pages/BookingPage/Booking";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";
import HomeForAdmin from "./Pages/HomePage/HomeForAdmin";
import { useEffect, useState } from "react";

function App() {
   const [loggedInUser, setLoggedInUser] = useState(null);

   // Load logged-in user from localStorage when app starts
   useEffect(() => {
      const user = localStorage.getItem("loggedInUser");
      if (user) {
         const parsed = JSON.parse(user);
         if (parsed && typeof parsed === "object") {
            setLoggedInUser(parsed);
         } else {
            localStorage.removeItem("loggedInUser");
         }
      }
   }, []);

   return (
      <Router>
         <Routes>
            {/* Root Route - decides where to go after login */}
            <Route
               path="/"
               element={
                  loggedInUser ? (
                     loggedInUser.isAdmin ? (
                        <Navigate to="/homeForAdmin" />
                     ) : (
                        <Navigate to="/home" />
                     )
                  ) : (
                     <Login setLoggedInUser={setLoggedInUser} />
                  )
               }
            />

            {/* Normal User Home */}
            <Route
               path="/home"
               element={
                  loggedInUser && !loggedInUser.isAdmin ? (
                     <Home
                        matchedUser={loggedInUser}
                        setLoggedInUser={setLoggedInUser}
                     />
                  ) : (
                     <Navigate to="/" />
                  )
               }
            />

            {/* Admin Home */}
            <Route
               path="/homeForAdmin"
               element={
                  loggedInUser && loggedInUser.isAdmin ? (
                     <HomeForAdmin setLoggedInUser={setLoggedInUser} />
                  ) : (
                     <Navigate to="/" />
                  )
               }
            />

            {/* Other Routes */}
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking />} />
         </Routes>
      </Router>
   );
}

export default App;
