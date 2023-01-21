import "./Register.css";
import BoutiqueContext from "../../BoutiqueContext";
import React from "react";

const Contact = (props) => {
  const boutiqueContext = React.useContext(BoutiqueContext);
  return (
    <div className="contactWindow">
      <div
        className="closeCart "
        onClick={() => {
          boutiqueContext.handleDisplayRegister("Sipn Up/Log In");
        }}
      >
        X
      </div>
      <div className="contactForm">
        <form>
          <label>
            <h2>CREATE ACCOUNT</h2>
            <input type="text" name="nome" placeholder="Last Name" />
            <input type="text" name="prenom" placeholder="First Name" />
            <input type="text" name="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Repeat your Password"
              required
            />
          </label>
          <div className="checkbox">
            <input type="checkbox" id="accept" name="accept" value="yes" />{" "}
            <h3>{" I agree all statemants in Terms of service"}</h3>
          </div>
          <div className="submit">
            <input type="submit" value="SIGN UP" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
