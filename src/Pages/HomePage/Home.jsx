import "../../common.css";
import Header from "../../Component/Header/Header";
import MenuBtn from "../../Component/MenuBtn/MenuBtn";
import NavBar from "../../Component/NavBar/NavBar";
import Hero from "../../Component/Hero/Hero";
import About from "../../Component/About/About";
import Rides from "../../Component/Rides/Rides";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";

function Home() {
   return (
      <>
         <Header />
         <MenuBtn />
         <NavBar />
         <Hero />
         <About />
         <Rides />
         <Contact />
         <Footer />
      </>
   );
}

export default Home;
