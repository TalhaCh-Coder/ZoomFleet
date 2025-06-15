import React, { useEffect, useState } from "react";
import "./BookingsList.css";

function BookingsList({ matchedUser }) {
   const [bookings, setBookings] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchBookings = () => {
      fetch(
         "https://car-rental-backend-production-2b49.up.railway.app/bookings"
      )
         .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch bookings");
            return res.json();
         })
         .then((data) => {
            let filteredBookings;

            if (matchedUser) {
               filteredBookings = data.filter(
                  (b) => b.userEmail === matchedUser.email
               );
            } else {
               filteredBookings = data;
            }

            setBookings(filteredBookings);
            setLoading(false);
         })
         .catch((err) => {
            setError(err.message);
            setLoading(false);
         });
   };

   useEffect(() => {
      fetchBookings();
   }, [matchedUser]);

   const handleDelete = (id) => {
      if (window.confirm("Are you sure you want to remove this booking?")) {
         fetch(
            `https://car-rental-backend-production-2b49.up.railway.app/bookings/${id}`,
            {
               method: "DELETE",
            }
         )
            .then((res) => {
               if (res.ok) {
                  fetchBookings(); // Refresh list
               } else {
                  alert("Failed to remove booking.");
               }
            })
            .catch((err) => console.error("Delete error:", err));
      }
   };

   if (loading) return <p>Loading bookings...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <div className="container-fluid bookings-container">
         <h2 className="bookings-heading" id="Bookings">
            {matchedUser ? "Your Bookings" : "All Bookings"}
         </h2>
         <div className="table-wrapper">
            <table className="bookings-table">
               <thead>
                  <tr>
                     <th>#</th>
                     <th>User</th>
                     <th>Car</th>
                     <th>Pick Up Date</th>
                     <th>Return Date</th>
                     <th>PickUp - DropOff</th>
                     {!matchedUser && <th>Action</th>}
                  </tr>
               </thead>
               <tbody>
                  {bookings.length === 0 ? (
                     <tr>
                        <td colSpan="7">No bookings found.</td>
                     </tr>
                  ) : (
                     bookings.map((booking, index) => (
                        <tr key={booking.id}>
                           <td>{index + 1}</td>
                           <td>{booking.fullName || "N/A"}</td>
                           <td>{booking.carName || "N/A"}</td>
                           <td>{booking.pickupDate || "N/A"}</td>
                           <td>{booking.returnDate || "N/A"}</td>
                           <td>
                              {`${booking.pickupAddress || "N/A"} - ${
                                 booking.dropoffAddress || "N/A"
                              }`}
                           </td>
                           {!matchedUser && (
                              <td>
                                 <button
                                    className="remove-booking-btn"
                                    onClick={() => handleDelete(booking.id)}
                                 >
                                    Remove
                                 </button>
                              </td>
                           )}
                        </tr>
                     ))
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default BookingsList;
