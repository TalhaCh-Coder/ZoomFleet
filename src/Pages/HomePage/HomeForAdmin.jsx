import React, { useState } from "react";
import Header from "../../Component/Header/Header";
import MenuBtn from "../../Component/MenuBtn/MenuBtn";
import NavBar from "../../Component/NavBar/NavBar";
import Hero from "../../Component/Hero/Hero";
import Footer from "../../Component/Footer/Footer";
import RidesForAdmin from "../../Component/RidesForAdmin/RidesForAdmin";
import UsersList from "../../Component/UserLists/UsersList";
import BookingsList from "../../Component/BookingsList/BookingsList";

function HomeForAdmin({ setLoggedInUser }) {
   const [navDisplay, setNavDisplay] = useState("none");
   return (
      <>
         <Header />
         <MenuBtn navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
         <NavBar userType="admin" navDisplay={navDisplay} />
         <Hero setLoggedInUser={setLoggedInUser} />
         <RidesForAdmin />
         <UsersList />
         <BookingsList />
         <Footer />
      </>
   );
}

export default HomeForAdmin;
