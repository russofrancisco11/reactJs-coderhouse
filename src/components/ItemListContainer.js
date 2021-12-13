import React from "react";
import ItemCount from './ItemCount';

const Items = {
    BotonSubmit : () => (<button>Submit</button>),
    Titulo : ({text}) => (<h1>{text}</h1>)
}

function ListContainer () {
    return(
        <div className="ListContainer">
            <Items.Titulo text="Hola tutor Dieguito"></Items.Titulo>
            <ItemCount />
            <Items.BotonSubmit></Items.BotonSubmit>
        </div>
    );
}

export default ListContainer