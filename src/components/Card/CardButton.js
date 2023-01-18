import "./Card.css";
import BoutiqueContext from "../../BoutiqueContext";
import React from "react";
function CardButton(props) {
  
  const boutiqueContext = React.useContext(BoutiqueContext);
  return <button onClick={() => boutiqueContext.achat(props.id)}>Buy</button>;
}
export default CardButton;
