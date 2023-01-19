// import BoutiqueContext from "../../BoutiqueContext";
import React from "react";
import "./ContactForm.css";
const ContactForm = (props) => {
//   const boutiqueContext = React.useContext(BoutiqueContext);
  return (
    <div className="formWindow">
      <div className="form">
        <form action="/upload" method="post" encType="multipart/form-data">
          <label>
            <h2>SEND US A MESSAGE</h2>
            <input type="text" name="nome" placeholder="Last Name" />
            <input type="text" name="prenom" placeholder="First Name" />
            <input type="text" name="email" placeholder="Email" />
            <textarea
              className="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </label>

          <div className="submit">
            <input type="submit" value="SEND" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
