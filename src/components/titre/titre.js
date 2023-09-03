import "./titre.css";

function Titre(props) {
    return (
        <div>
                <h1>{props.text}</h1>
               { props.condition &&  <span> welcome home</span>}
        </div>
        
    );
    
}

export default Titre;