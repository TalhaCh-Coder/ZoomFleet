import "./Booking.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking({ carName: propCarName }) {
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
         carName,
      };

      try {
         const response = await fetch("http://localhost:4000/bookings", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
         });

         if (!response.ok) {
            throw new Error("Failed to save booking.");
         }

         const data = await response.json();
         alert(
            `Booking saved successfully with booking id ${data.id}. Remember your booking id if you have to cancel your booking in future!`
         );

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
      <>
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
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
               />
               <input
                  type="tel"
                  name="contact"
                  id="contact"
                  placeholder="Contact"
                  autoComplete="tel"
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
                  autoComplete="street-address"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  required
               />
               <input
                  type="text"
                  name="dropoffAddress"
                  id="dropoffAddress"
                  placeholder="Drop-off Location"
                  autoComplete="street-address"
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

            <button type="submit" className="confirmBookingBtn">
               CONFIRM BOOKING
            </button>
         </form>
      </>
   );
}

export default Booking;
