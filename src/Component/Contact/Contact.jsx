import "./Contact.css";

function Contact() {
   return (
      <>
         <div
            className="container grid-container contact-modifier"
            id="contact"
         >
            <div className="container-fluid form-cont-modifier">
               <h1>Send Us a Message</h1>
               <form action="submit">
                  <div className="input-wrapper">
                     <input
                        type="text"
                        name="Full Name"
                        id="fullName"
                        placeholder="Full Name"
                        autoComplete="name"
                     />
                     <input
                        type="email"
                        name="Email"
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                     />
                  </div>
                  <textarea
                     name="textarea"
                     id="textarea"
                     placeholder="Message..."
                  ></textarea>
                  <button className="coloredButton">SUBMIT</button>
               </form>
            </div>
            <div id="social">
               <h1>Or Contact Us via Social Media</h1>
               <div className="flex-container" id="social-icon-wrapper">
                  <img
                     src="./imgs/facebook.png"
                     alt="Faceboot Icon"
                     width="35px"
                  />
                  <img
                     src="./imgs/linkedin.png"
                     alt="LinkedIn Icon"
                     width="35px"
                  />
                  <img
                     src="./imgs/instagram.png"
                     alt="Instagram Icon"
                     width="35px"
                  />
                  <img
                     src="./imgs/whatsapp.png"
                     alt="Whatsapp Icon"
                     width="35px"
                  />
                  <img
                     src="./imgs/twitter.png"
                     alt="Twitter Icon"
                     width="35px"
                  />
               </div>
            </div>
         </div>
      </>
   );
}

export default Contact;
