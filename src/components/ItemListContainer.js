import React from "react";
import ItemCount from './ItemCount';
import ItemList from "./ItemList";

const Items = {
    BotonSubmit : () => (<button>Submit</button>),
    Titulo : ({text}) => (<h1>{text}</h1>)
}

function ListContainer () {
    return(
        <div className="ListContainer">
            <Items.Titulo text="Lista de items?"></Items.Titulo>
            <ItemList />
            <ItemCount />
            <Items.BotonSubmit></Items.BotonSubmit>
        </div>
    );
}

export default ListContainer