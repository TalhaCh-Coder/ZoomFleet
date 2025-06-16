import "../../common.css";
import Header from "../../Component/Header/Header";
import MenuBtn from "../../Component/MenuBtn/MenuBtn";
import NavBar from "../../Component/NavBar/NavBar";
import Hero from "../../Component/Hero/Hero";
import About from "../../Component/About/About";
import Rides from "../../Component/Rides/Rides";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";
import { useState } from "react";
import BookingsList from "../../Component/BookingsList/BookingsList";

function Home({ matchedUser, setLoggedInUser }) {
   const [navDisplay, setNavDisplay] = useState("none");
   return (
      <>
         <Header />
         <MenuBtn navDisplay={navDisplay} setNavDisplay={setNavDisplay} />
         <NavBar userType="passenger" navDisplay={navDisplay} />
         <Hero setLoggedInUser={setLoggedInUser} />
         <About />
         <Rides />
         <BookingsList matchedUser={matchedUser} canDelete={true} />
         <Contact />
         <Footer />
      </>
   );
}

export default Home;
