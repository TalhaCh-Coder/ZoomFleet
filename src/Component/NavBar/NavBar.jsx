import "./NavBar.css";

function NavBar({ userType, navDisplay }) {
   const passengerMenu = [
      { name: "Home", path: "#HeroSection" },
      { name: "About", path: "#about" },
      { name: "Rides", path: "#Rides" },
      { name: "Contact", path: "#contact" },
   ];
   const adminMenu = [
      { name: "Home", path: "#HeroSection" },
      { name: "Rides", path: "#Rides" },
      { name: "Bookings", path: "#Bookings" },
      { name: "Users", path: "#Users" },
   ];
   const menu = userType === "admin" ? adminMenu : passengerMenu;
   const [item1, item2, item3, item4] = menu;
   return (
      <>
         <nav
            className="container navbar-modifier"
            style={{ display: navDisplay }}
         >
            <a href={item1.path} className="flex-container">
               {item1.name}
            </a>
            <a href={item2.path} className="flex-container">
               {item2.name}
            </a>
            <a href={item3.path} className="flex-container">
               {item3.name}
            </a>
            <a href={item4.path} className="flex-container">
               {item4.name}
            </a>
         </nav>
      </>
   );
}

export default NavBar;
