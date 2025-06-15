import React, { useState } from "react";
import "./AddCarPopup.css";

function AddCarPopup({ onClose, onCarAdded }) {
   const [carData, setCarData] = useState({
      carName: "",
      carDiscription: "",
      pricePerHour: "",
      imageURL: "",
      brand: "",
      model: "",
      availability: true,
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setCarData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch("https://car-rental-backend-production-2b49.up.railway.app/cars", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(carData),
      })
         .then((res) => res.json())
         .then(() => {
            onCarAdded();
            onClose();
         })
         .catch((err) => {
            console.error("Failed to add car:", err);
         });
   };

   return (
      <div className="popup-overlay">
         <div className="popup">
            <h2>Add New Car</h2>
            <form onSubmit={handleSubmit} className="popup-form">
               <input
                  type="text"
                  name="carName"
                  placeholder="Car Name"
                  value={carData.carName}
                  onChange={handleChange}
                  required
               />
               <input
                  type="text"
                  name="carDiscription"
                  placeholder="Description"
                  value={carData.carDiscription}
                  onChange={handleChange}
                  required
               />
               <input
                  type="text"
                  name="pricePerHour"
                  placeholder="Price per Hour"
                  value={carData.pricePerHour}
                  onChange={handleChange}
                  required
               />
               <input
                  type="text"
                  name="imageURL"
                  placeholder="Image URL"
                  value={carData.imageURL}
                  onChange={handleChange}
               />
               <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={carData.brand}
                  onChange={handleChange}
               />
               <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  value={carData.model}
                  onChange={handleChange}
               />
               <div className="popup-buttons">
                  <button type="submit" className="add-car-btn confirm-btn">
                     Confirm
                  </button>
                  <button
                     type="button"
                     className="add-car-btn cancel-btn"
                     onClick={onClose}
                  >
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default AddCarPopup;
