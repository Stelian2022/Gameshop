import CardButton from "./CardButton";
import './Card.css';
function Card(props) {
    
    return (
      <div>
        <img src={props.data.url} alt="" />
  
        <div>
          <div className="name">{props.data.name}</div>
          <div className="prix">$ {props.data.price}</div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="buttonCard">
          <CardButton id={props.data.id} />
        </div>
      </div>
    );
  }
  

  export default Card;
  
  