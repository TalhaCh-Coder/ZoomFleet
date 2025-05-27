import "./Rides.css";
import { Link } from "react-router-dom";

function Rides() {
   return (
      <>
         <div className="container rides-cont-wrapper">
            <h1 id="Rides" className="sub-section-heading">
               RIDES
            </h1>
            <div className="container-fluid rides-cont-modifier">
               <div className="card">
                  <div className="card-img">
                     <img src="./imgs/car1.webp" alt="car img" width="100%" />
                  </div>
                  <div className="card-body">
                     <h2 id="card-title">Suzuki Swift</h2>
                     <p id="card-disc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magni odit harum, ipsa deserunt aperiam
                        repudiandae?
                     </p>
                     <Link
                        to="/booking?car=Suzuki Swift"
                        className="outline-btn card-btn-modifier"
                     >
                        BOOK NOW
                     </Link>
                     <button className="cancel-btn card-btn-modifier">
                        CANCEL
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="card-img">
                     <img src="./imgs/car2.webp" alt="car img" width="100%" />
                  </div>
                  <div className="card-body">
                     <h2 id="card-title">Toyota Corolla</h2>
                     <p id="card-disc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magni odit harum, ipsa deserunt aperiam
                        repudiandae?
                     </p>
                     <Link
                        to="/booking?car=Toyota Corolla"
                        className="outline-btn card-btn-modifier"
                     >
                        BOOK NOW
                     </Link>
                     <button className="cancel-btn card-btn-modifier">
                        CANCEL
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="card-img">
                     <img src="./imgs/car3.webp" alt="car img" width="100%" />
                  </div>
                  <div className="card-body">
                     <h2 id="card-title">Honda Civic</h2>
                     <p id="card-disc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magni odit harum, ipsa deserunt aperiam
                        repudiandae?
                     </p>
                     <Link
                        to="/booking?car=Honda Civic"
                        className="outline-btn card-btn-modifier"
                     >
                        BOOK NOW
                     </Link>
                     <button className="cancel-btn card-btn-modifier">
                        CANCEL
                     </button>
                  </div>
               </div>
               <div className="card">
                  <div className="card-img">
                     <img src="./imgs/car4.webp" alt="car img" width="100%" />
                  </div>
                  <div className="card-body">
                     <h2 id="card-title">Kia Picanto</h2>
                     <p id="card-disc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magni odit harum, ipsa deserunt aperiam
                        repudiandae?
                     </p>
                     <Link
                        to="/booking?car=Kia Picanto"
                        className="outline-btn card-btn-modifier"
                     >
                        BOOK NOW
                     </Link>
                     <button className="cancel-btn card-btn-modifier">
                        CANCEL
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Rides;
