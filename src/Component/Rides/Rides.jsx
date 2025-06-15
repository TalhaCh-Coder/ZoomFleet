import { useEffect, useState } from "react";
import "./Rides.css";
import { Link } from "react-router-dom";

function Rides() {
   const [rides, setRides] = useState([]);
   useEffect(() => {
      fetch("http://localhost:4000/cars")
         .then((res) => {
            return res.json();
         })
         .then((data) => setRides(data))
         .catch((err) => {
            console.log(err);
         });
   }, []);

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
                     <Link
                        to={`/booking?car=${encodeURIComponent(car.carName)}`}
                        className="outline-btn card-btn-modifier"
                     >
                        BOOK NOW
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Rides;
