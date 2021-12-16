import React from "react";
import ItemCount from './ItemCount';
import ItemList from "./ItemList";

export const ItemListContainer= () => {
    const Cosas = {
        BotonSubmit : () => (<button>Submit</button>),
        Titulo : ({text}) => (<h1>{text}</h1>)
    }
    
    let objeto = {
        nombre: "Barra olímpica",
        imagen: "#",
        precio: "25.000",
        descripcion: "Barra cono rodamientos, 20 kg, 2.20 metros de largo",
    }

    return(
        <>
        <div className="ListContainer">
            <Cosas.Titulo text="Lista de items?"></Cosas.Titulo>
            <ItemList objeto={objeto}/>
            <ItemCount />
            <Cosas.BotonSubmit></Cosas.BotonSubmit>
        </div>
        </>
    );
}

export default ItemListContainer

/*const Cosas = {
    BotonSubmit : () => (<button>Submit</button>),
    Titulo : ({text}) => (<h1>{text}</h1>)
}

let objeto = {
    nombre: "Barra olímpica",
    imagen: "#",
    precio: "25.000",
    descripcion: "Barra cono rodamientos, 20 kg, 2.20 metros de largo",
}

function ListContainer () {

    return(
        <>
        <div className="ListContainer">
            <Cosas.Titulo text="Lista de items?"></Cosas.Titulo>
            <ItemList objeto={objeto}/>
            <ItemCount />
            <Cosas.BotonSubmit></Cosas.BotonSubmit>
        </div>
        </>
    );
}

export default ListContainer*/