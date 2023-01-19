import "./Card.css";
import BoutiqueContext from "../../BoutiqueContext";
import React from "react";
function CardButton(props) {
  
  const boutiqueContext = React.useContext(BoutiqueContext);
  if(
    boutiqueContext.data[props.id].qte>0
  ){
    return (
      <button 
   
    
    onClick={() => boutiqueContext.achat(props.id)}>Buy</button>
    )
    
  }else{
    return(
      <button className="cardButton inactive">N'est plus en stock</button>
    )
  }
 
  
}
export default CardButton;
