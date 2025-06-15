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
            <div className="label-cont">
               <label htmlFor="fullName">Full Name</label>
               <label htmlFor="contact">Contact</label>
            </div>
            <div>
               <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
               />
               <input
                  type="tel"
                  name="contact"
                  id="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="label-cont">
               <label htmlFor="pickupAddress">Pickup Location</label>
               <label htmlFor="dropoffAddress">Drop-off Location</label>
            </div>
            <div>
               <input
                  type="text"
                  name="pickupAddress"
                  id="pickupAddress"
                  placeholder="Pickup Location"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  required
               />
               <input
                  type="text"
                  name="dropoffAddress"
                  id="dropoffAddress"
                  placeholder="Drop-off Location"
                  value={formData.dropoffAddress}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="label-cont">
               <label htmlFor="pickupDate">Pickup Date</label>
               <label htmlFor="returnDate">Return Date</label>
            </div>
            <div>
               <input
                  type="datetime-local"
                  name="pickupDate"
                  id="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
               />
               <input
                  type="datetime-local"
                  name="returnDate"
                  id="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="booking-btn-wrapper">
               <button type="submit" className="confirmBookingBtn">
                  CONFIRM
               </button>
               <button
                  className="confirmBookingBtn"
                  type="button"
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
