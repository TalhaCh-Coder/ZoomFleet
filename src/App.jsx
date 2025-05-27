import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Booking from "./Pages/BookingPage/Booking";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";

function App() {
   // No login state check here, always show login or home according to path
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking />} />
         </Routes>
      </Router>
   );
}

export default App;
