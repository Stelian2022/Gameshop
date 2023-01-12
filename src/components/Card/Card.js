import CardButton from "./CardButton";
import './Card.css';
function Card(props) {
    console.dir(props);
    return (
      <div>
        <img src={props.data.url} alt="" />
  
        <div>
          <div className="name">{props.data.name}</div>
          <div className="prix">$ {props.data.price}</div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="buttonCard">
          <CardButton qteCard={props.data.qte} />
        </div>
      </div>
    );
  }
  

  export default Card;
  
  