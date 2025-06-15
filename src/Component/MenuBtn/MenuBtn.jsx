import "./MenuBtn.css";

function MenuBtn({ navDisplay, setNavDisplay }) {
   return (
      <>
         <div className="container menu-bar-modifier menu-bar-display">
            <div className="container-fluid">
               <img
                  id="menu-btn"
                  src="./imgs/menu-bar.png"
                  alt="Menu button"
                  width="30px"
                  onClick={() => {
                     console.log("Btn is clicked!");
                     if (navDisplay === "none") setNavDisplay("flex");
                     else setNavDisplay("none");
                  }}
               />
            </div>
         </div>
      </>
   );
}

export default MenuBtn;
