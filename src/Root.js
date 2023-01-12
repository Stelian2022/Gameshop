import React from "react";
import Menu from "./components/Menu/Menu";
import CardFrame from "./components/CardFrame/CardFrame";

import "./Root.css";
import articles from "./articles";
import Cart from "./components/Cart/Cart";
import Reseaux from "./components/Footer/Footer";

//Component de type class simple
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: articles,
    };
  }

  render() {
    return (
      <div>
        <Cart></Cart>
        <header>
          <Menu></Menu>
        </header>

        <main>
          <CardFrame data={this.state.data}></CardFrame>
        </main>
        <footer>
          <Reseaux>
            
          </Reseaux>
        </footer>
      </div>
    );
  }
}
export default Root;
