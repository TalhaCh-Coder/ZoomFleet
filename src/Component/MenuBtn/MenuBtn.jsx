import "./MenuBtn.css";

function MenuBtn() {
   return (
      <>
         <div className="container menu-bar-modifier menu-bar-display">
            <div className="container-fluid">
               <img
                  id="menu-btn"
                  src="./imgs/menu-bar.png"
                  alt="Menu button"
                  width="30px"
               />
            </div>
         </div>
      </>
   );
}

export default MenuBtn;
