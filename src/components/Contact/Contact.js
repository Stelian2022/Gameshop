import "./Contact.css";
const Contact = (props) => {
  return (
    <div className="contactWindow">
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
              minlength="6"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Repeat your Password"
              minlength="6"
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
