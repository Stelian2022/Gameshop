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
        boutiqueContext.handleDisplayRegister(props.texte);
        boutiqueContext.handleDisplayContact(props.texte);
       
      }}
    >
      <a href={props.url}>{props.texte}</a>
    </li>
    
  );
}

export default MenuButton;
