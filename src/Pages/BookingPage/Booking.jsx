import "./Booking.css";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Booking({ carName: propCarName }) {
   const navigate = useNavigate();
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const carName = propCarName || queryParams.get("car") || "Unknown Car";

   const [formData, setFormData] = useState({
      fullName: "",
      contact: "",
      pickupAddress: "",
      dropoffAddress: "",
      pickupDate: "",
      returnDate: "",
   });

   const [userEmail, setUserEmail] = useState("");

   useEffect(() => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
         const parsedUser = JSON.parse(storedUser);
         setUserEmail(parsedUser.email || "");
         setFormData((prev) => ({
            ...prev,
            fullName: parsedUser.name || "",
         }));
      } else {
         alert("Please login before booking.");
         navigate("/login");
      }
   }, [navigate]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const bookingData = {
         ...formData,
         userEmail,
         carName,
      };

      try {
         const response = await fetch(
            "https://car-rental-backend-production-2b49.up.railway.app/bookings",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(bookingData),
            }
         );

         if (!response.ok) throw new Error("Failed to save booking.");

         await response.json();
         navigate("/home");

         setFormData({
            fullName: "",
            contact: "",
            pickupAddress: "",
            dropoffAddress: "",
            pickupDate: "",
            returnDate: "",
         });
      } catch (error) {
         console.error("Booking error:", error);
         alert("Error saving booking. Please try again later.");
      }
   };

   return (
      <div className="parent-for-bg-img">
         <h1 className="sub-section-heading booking-section-heading">
            Book {carName} Now
         </h1>
         <form
            onSubmit={handleSubmit}
            id="Booking-Form"
            className="booking-form-modifier"
         >
            <div className="label-and-input-wrapper">
               <label htmlFor="fullName">Full Name</label>
               <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
               />
            </div>
            <div className="label-and-input-wrapper">
               <label htmlFor="contact">Contact</label>
               <input
                  type="text"
                  name="contact"
                  placeholder="Enter your contact"
                  value={formData.contact}
                  onChange={handleChange}
               />
            </div>
            <div className="label-and-input-wrapper">
               <label htmlFor="pickupAddress">Pickup Address</label>
               <input
                  type="text"
                  name="pickupAddress"
                  placeholder="Enter Pickup Address"
                  value={formData.pickupAddress}
                  onChange={handleChange}
               />
            </div>
            <div className="label-and-input-wrapper">
               <label htmlFor="dropoffAddress">Dropoff Address</label>
               <input
                  type="text"
                  name="dropoffAddress"
                  placeholder="Enter Dropoff Address"
                  value={formData.dropoffAddress}
                  onChange={handleChange}
               />
            </div>
            <div className="label-and-input-wrapper">
               <label htmlFor="pickupDate">Pickup Date</label>
               <input
                  type="datetime-local"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
               />
            </div>
            <div className="label-and-input-wrapper">
               <label htmlFor="returnDate">Return Date</label>
               <input
                  type="datetime-local"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
               />
            </div>
            <div className="booking-btn-wrapper">
               <button type="submit" className="confirmBookingBtn">
                  CONFIRM
               </button>
               <button
                  type="button"
                  className="confirmBookingBtn"
                  onClick={() => navigate("/home")}
               >
                  CANCEL
               </button>
            </div>
         </form>
      </div>
   );
}

export default Booking;
