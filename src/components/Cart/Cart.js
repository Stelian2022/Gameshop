import BoutiqueContext from '../../BoutiqueContext';
import React from 'react';
import './Cart.css';
const Cart = (props) => {
  const boutiqueContext=React.useContext(BoutiqueContext);
  return (
    <div className="backCart">
      <div className="cart">
        <div className="closeCart " onClick={()=>
        {
          boutiqueContext.handleDisplayFrame("Cart");
        }}>
          X
          </div>
          
        <h3>Votre Panier :</h3>
        <ul>
          {/* {Boucle Map sur le panier */}
          <li>
            <span className="name">{}</span>
            <span>
              <span className="moreCart">+</span>
              <span className="qteCart">{}</span>
              <span className="lessCart">-</span>
              <span className="peiceCart">{}</span>
              <span className="removeCart">
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </span>
          </li>
        </ul>
        <div>
          <span className="totalCart">{}</span>
          <button className="achatCart">Acheter</button>
        </div>
      </div>
    </div>
    
  );
  

};

export default Cart;
