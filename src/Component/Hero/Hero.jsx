import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero({ setLoggedInUser }) {
   const heroMessages = [
      "Drive Your Journey - Affordable & Comfortable Car Rentals at Your Fingertips",
      "Zoom Through Life with Our Hassle-Free Car Rentals",
      "Book Your Ride in Seconds – Start Your Trip Today!",
   ];

   const [messageIndex, setMessageIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setMessageIndex((prevIndex) =>
            prevIndex === heroMessages.length - 1 ? 0 : prevIndex + 1
         );
      }, 6000); // Change every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount
   }, []);

   return (
      <main id="HeroSection" className="container flex-container hero-modifier">
         <div className="container-fluid">
            <h1>{heroMessages[messageIndex]}</h1>
            <button
               className="coloredButton logout-btn-modifier"
               onClick={() => {
                  localStorage.removeItem("loggedInUser");
                  setLoggedInUser(null);
               }}
            >
               Logout
            </button>
         </div>
      </main>
   );
}

export default Hero;
