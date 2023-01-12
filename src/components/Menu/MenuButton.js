import './Menu.css';
function MenuButton(props) {
    //j'ai besoin re recuperer le texte de mon lien et son url
    return (
      <li>
        <a href={props.url}>{props.texte}</a>
      </li>
    );
  }
  export default MenuButton;