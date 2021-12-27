import React from "react";
import {useParams} from "react-router-dom";
import ItemCount from './ItemCount';
import ItemList from "./ItemList";

export const ItemListContainer = () => {
    
    let {categoria} = useParams();

    let objeto = [
        {
            nombre: "Barra olímpica",
            imagen: "#",
            precio: "25.000",
            descripcion: "Barra cono rodamientos, 20 kg, 2.20 metros de largo",
        },
        {
            nombre: "Barra olímpica para mujeres",
            imagen: "#",
            precio: "22.000",
            descripcion: "Barra cono rodamientos, 15 kg, 2.00 metros de largo",
        },
        {
            nombre: "Barra olímpica w",
            imagen: "#",
            precio: "15",
            descripcion: "Barra cono rodamientos, 12 kg, 1.50 metros de largo",
        },
    ]

    return(
        <>
        <div className="ListContainer">
            <p>Lista de {categoria}</p>
            <ItemList objeto={objeto}/>
            <ItemCount />
        </div>
        </>
    );
}

export default ItemListContainer