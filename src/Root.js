import React from "react";
import Menu from "./components/Menu/Menu";
import CardFrame from "./components/CardFrame/CardFrame";
import Contact from "./components/Contact/Contact";
import "./Root.css";
import articles from "./articles";
import Cart from "./components/Cart/Cart";
import Reseaux from "./components/Footer/Footer";
import BoutiqueContext from "./BoutiqueContext";

//Component de type class simple
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articles,
      displayFramesCart: false,
      displayFrameRegister: false,
      cart: [],
      handleDisplayFrame: this.handleDisplayFrame.bind(this),
      achat: this.achat.bind(this),
    };
    // this.handleDisplayFrame=this.handleDisplayFrame.bind(this);
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
  achat(id) {
    console.log(id);
    let cartTmp=this.state.cart;
   cartTmp.push(id);
    this.setState(()=>{
      return {
        cart:cartTmp
      }
    })
    console.dir(this.state.cart);
  }
  render() {
    return (
      <div>
        <BoutiqueContext.Provider value={this.state}>
          {this.state.displayFramesCart ? <Cart></Cart> : <></>}

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
