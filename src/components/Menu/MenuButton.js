import "./Menu.css";
import BoutiqueContext from "../../BoutiqueContext";
import { useContext } from "react";

function MenuButton(props) {
  const boutiqueContext = useContext(BoutiqueContext);

  //j'ai besoin re recuperer le texte de mon lien et son url
  return (
    <li
      onClick={() => {
        boutiqueContext.handleDisplayFrame(props.texte);
        boutiqueContext.handleDisplayFrameIcon(props.texte);
        boutiqueContext.handleDisplayRegister(props.texte);
        boutiqueContext.handleDisplayContact(props.texte);
      }}
    >
      <a href={props.url}>{props.texte}</a>
      {props.texte === "" && boutiqueContext.cart.length > 0 ? (
        <span className="pill"><i className="fa-solid fa-cart-shopping">{boutiqueContext.cart.length}</i></span>
      ) : (
        <></>
      )}
    </li>
  );
}

export default MenuButton;
