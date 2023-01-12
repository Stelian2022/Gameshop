import MenuButton from "./MenuButton";
import "./Menu.css";
//creer une class menuEntries qui va générer les objets
//de mon menuComponent ci-desus :
class MenuEntries {
  constructor(text, url) {
    this.text = text;
    this.url = url;
  }

  text = "";
  url = "";
}
const menuContent = [
  new MenuEntries("Home", "#"),
  new MenuEntries("Games", "#"),
  new MenuEntries("Cart", "#"),
  new MenuEntries("Contact", "#"),
];
console.dir(menuContent);

// const menuContent = [
//   {
//     text: "Home",
//     url: "#",
//   },
//   {
//     text: "Costums",
//     url: "#",
//   },
//   {
//     text: "Cart",
//     url: "#",
//   },
// ];
function displayMenu() {
  document.querySelector(".innerMenu").classList.toggle("dNone");
  document.querySelector(".innerMenu").classList.toggle("dFlex");
  document.querySelector(".burger i").classList.toggle("fa-bars");
  document.querySelector(".burger i").classList.toggle("fa-xmark");
}
function Menu() {
  return (
    <div className="menuHeader">
      <div className="logo">GAME SHOP</div>
      <ul className="innerMenu dNone">
        {
          /*pour appeler une boucle dans mon JSX je dois utiliser des accolades*/
          menuContent.map((value) => {
            console.dir(value);
            //pour retourner a nouveau du JSX je doit dans ma function callback
            //utiliser un return
            return <MenuButton texte={value.text} url={value.url}></MenuButton>;
          })
        }
      </ul>
      {/* Attention dans un event l'utilisation de paratheses a la suite 
      de ma fonction appelle cette fonction a l'ouverture du document.
      Il faudra donc les retirer. */}
<div className="menuCart">
<div className="burger" onClick={displayMenu}>
        <i className="fa-solid fa-bars"></i>
       
      </div>
      <i class="fa-solid fa-cart-shopping"></i>

</div>

      
     
    </div>
  );
}

export default Menu;
