import BoutiqueContext from "../../BoutiqueContext";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const boutiqueContext = React.useContext(BoutiqueContext);
  let cartTmp = boutiqueContext.cart.sort();
  let qteDisplay;
  let total = 0;
  let qteTmp = 0;

  //boucle if si le Panier est vide

  if (boutiqueContext.cart.length > 0) {
    return (
      <div className="backCart">
        <div className="cart">
          <div
            className="closeCart "
            onClick={() => {
              boutiqueContext.handleDisplayFrame("Cart");
            }}
          >
            X
          </div>

          <h3>Votre Panier :</h3>
          <ul>
            {boutiqueContext.cart.map((value, i) => {
              let article = boutiqueContext.data[value];

              if (value !== boutiqueContext.cart[i + 1]) {
                qteDisplay = qteTmp + 1;
                qteTmp = 0;
                return (
                  <li key={i}>
                    <span className="name">{article.name}</span>
                    <span>
                      {boutiqueContext.data[value].qte > 0 ? (
                        <span
                          className="moreCart"
                          onClick={() => boutiqueContext.achat(value)}
                        >
                          +
                        </span>
                        
                      ) : (
                        <></>
                        
                      )
                      }
                      

                      <span className="qteCart">{qteDisplay}</span>
                      <span
                        className="lessCart"
                        onClick={() => boutiqueContext.remove(i, value)}
                      >
                        -
                      </span>
                      <span className="priceCart">{article.price}€ TTC</span>
                      <span className="removeCart" 
                      onClick ={() => boutiqueContext.removeAll(value)} > 
                        <i className="fa-solid fa-trash-can" ></i>
                      </span>
                    </span>
                  </li>
                );
              } else {
                qteDisplay = qteTmp + 1;
                qteTmp++;
              }

              total += article.price;
            })}
          </ul>

          <div className="achat">
            <button className="achatCart">Acheter</button>
            <span className="totalCart" >{boutiqueContext.totalCart} € TTC </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="backCart">
        <div className="cart">
          <div
            className="closeCart "
            onClick={() => {
              boutiqueContext.handleDisplayFrame("Cart");
            }}
          >
            X
          </div>

          <h3>Votre Panier :</h3>
        </div>
      </div>
    );
  }
};

export default Cart;
