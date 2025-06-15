import React, { useEffect, useState } from "react";
import "./RidesForAdmin.css";
import AddCarPopup from "../AddCarPopup/AddCarPopUp";

function RidesForAdmin() {
   const [rides, setRides] = useState([]);
   const [showPopup, setShowPopup] = useState(false);

   const fetchRides = () => {
      fetch("https://car-rental-backend-production-2b49.up.railway.app/cars")
         .then((res) => res.json())
         .then((data) => setRides(data))
         .catch((err) => console.log(err));
   };

   useEffect(() => {
      fetchRides();
   }, []);

   function handleDelete(id) {
      if (window.confirm("Are you sure to remove this car?")) {
         fetch(
            `https://car-rental-backend-production-2b49.up.railway.app/cars/${id}`,
            {
               method: "DELETE",
            }
         )
            .then((res) => {
               if (res.ok) {
                  fetchRides();
               } else {
                  alert("Failed to remove car!");
               }
            })
            .catch((err) => console.log("Error: ", err));
      }
   }
   return (
      <div className="container rides-cont-wrapper">
         <h1 id="Rides" className="sub-section-heading">
            RIDES
         </h1>
         <div className="container-fluid rides-cont-modifier">
            {rides.map((car, index) => (
               <div className="card" key={index}>
                  <div className="card-img">
                     <img
                        src={car.imageURL || "./imgs/car1.webp"}
                        alt={car.carName}
                        width="100%"
                     />
                  </div>
                  <div className="card-body">
                     <h2 id="card-title">{car.carName}</h2>
                     <p id="card-disc">{car.carDiscription}</p>
                     <p className="price">
                        Price Per Hour: Rs. {car.pricePerHour}
                     </p>
                     <button
                        className="outline-btn card-btn-modifier"
                        onClick={() => handleDelete(car.id)}
                     >
                        REMOVE CAR
                     </button>
                  </div>
               </div>
            ))}
         </div>

         <button
            className="coloredButton new-car-btn"
            onClick={() => setShowPopup(true)}
         >
            Add Car
         </button>

         {showPopup && (
            <AddCarPopup
               onClose={() => setShowPopup(false)}
               onCarAdded={fetchRides}
            />
         )}
      </div>
   );
}

export default RidesForAdmin;
