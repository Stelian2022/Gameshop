import React from "react";
import Menu from "./components/Menu/Menu";
import CardFrame from "./components/CardFrame/CardFrame";
import Contact from "./components/Contact/Register";
import "./Root.css";
import articles from "./articles";
import Cart from "./components/Cart/Cart";
import Reseaux from "./components/Footer/Footer";
import BoutiqueContext from "./BoutiqueContext";
import ContactForm from "./components/Contact/ContactForm";
//Component de type class simple
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articles,
      displayFramesCart: false,
      displayFramesRegister: false,
      displayFramesContact: false,
      cart: [],
      totalCart: 0,
      handleDisplayFrame: this.handleDisplayFrame.bind(this),
      handleDisplayRegister: this.handleDisplayRegister.bind(this),
      handleDisplayContact: this.handleDisplayContact.bind(this),

      achat: this.achat.bind(this),
      remove: this.remove.bind(this),
      removeAll: this.removeAll.bind(this),
    };
  }

  handleDisplayFrame(value) {
    if (value === "Cart") {
      this.setState(() => {
        return {
          displayFramesCart: !this.state.displayFramesCart,
        };
      });
    }
  }
  handleDisplayRegister(value) {
    if (value === "Sipn Up/Log In") {
      this.setState(() => {
        return {
          displayFramesRegister: !this.state.displayFramesRegister,
        };
      });
    }
  }
  handleDisplayContact(value) {
    if (value === "Contact") {
      this.setState(() => {
        return {
          displayFramesContact: !this.state.displayFramesContact,
        };
      });
    }
  }
  achat(id) {
    //je dois decrémenter la quantité du this.state.data[id]
    //qui vient d'etre acheté
    if (this.state.data[id].qte > 0) {
      let cartTmp = this.state.cart.sort();
      let dataTmp = this.state.data;
      dataTmp[id].qte -= 1;
      cartTmp.push(id);
      this.setState(() => {
        return {
          data: dataTmp,
          cart: cartTmp,
        };
      });
      console.dir(this.state.cart);
      this.calculTotal(id, "achat");
    }
  }

  remove(i, id) {
    let cartTmp = this.state.cart.sort();
    let dataTmp = this.state.data;
    dataTmp[id].qte += 1;
    cartTmp.splice(i, 1);
    this.setState(() => {
      return {
        data: dataTmp,
        cart: cartTmp,
      };
    });
    this.calculTotal(id, "remove");
  }
  removeAll(id) {
    let cartTmp = this.state.cart.sort();
    let dataTmp = this.state.data;
    cartTmp.map((value, i) => {
      console.dir(value, id);
      if (value === id) {
        dataTmp[id].qte += 1;
        cartTmp.splice(i, 1);
        this.calculTotal(id, "remove");
      }
    });
    this.setState(() => {
      return {
        data: dataTmp,
        cart: cartTmp,
      };
    });
  }
  calculTotal(id, action) {
    let totalCartTmp = this.state.totalCart;
    let priceTmp = this.state.data[id].price;
    if (action === "achat") {
      totalCartTmp += priceTmp;
    } else if (action === "remove") {
      totalCartTmp -= priceTmp;
    }
    this.setState(() => {
      return {
        totalCart: totalCartTmp,
      };
    });
  }
  // garbage(i) {
  //   let cartTmp = this.state.cart;
  //   cartTmp.splice(i, 1);
  //   this.setState(() => {
  //     return {
  //       cart: cartTmp,
  //     };
  //   });
  // }

  //methode splice pour retirer un element d'un tableau

  render() {
    return (
      <div>
        <BoutiqueContext.Provider value={this.state}>
          {this.state.displayFramesCart ? <Cart></Cart> : <></>}
          {this.state.displayFramesRegister ? <Contact></Contact> : <></>}
          {this.state.displayFramesContact ? (
            <ContactForm></ContactForm>
          ) : (
            <></>
          )}

          <header>
            <Menu clickDisplayFrame={this.handleDisplayFrame}></Menu>
            {/* <Contact clickDisplayFrame={this.handleDisplayFrame}></Contact> */}
          </header>

          <main>
            <CardFrame data={this.state.data}></CardFrame>
          </main>
        </BoutiqueContext.Provider>
        <footer>
          <Reseaux></Reseaux>
        </footer>
      </div>
    );
  }
}
export default Root;
