
function Card(props){
   
   
    return(
        <div>
            <img src={require(`./images/${props.img}`)} alt="des"/>

            <p>{props.name}</p>
            <p>{props.cost}</p>
          
        </div>
    );
}

export default Card;