import "./NavBar.css";

function NavBar() {
   return (
      <>
         <nav className="container flex-container navbar-modifier">
            <a href="#heroSection" className="flex-container">
               Home
            </a>
            <a href="#about" className="flex-container">
               About
            </a>
            <a href="#Rides" className="flex-container">
               Rides
            </a>
            <a href="#contact" className="flex-container">
               Contact
            </a>
         </nav>
      </>
   );
}

export default NavBar;
