import React from "react";

const Items = {
    BotonSubmit : () => (<button>Submit</button>),
    Titulo : ({text}) => (<h1>{text}</h1>)
}

function ListContainer () {
    return(
        <div className="ListContainer">
            <Items.Titulo text="Hola tutor Dieguito"></Items.Titulo>,
            <Items.BotonSubmit></Items.BotonSubmit>
        </div>
    );
}

export default ListContainer