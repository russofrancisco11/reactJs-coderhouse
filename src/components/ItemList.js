import React from "react";
import Item from "./Item";

function ItemList ({objeto}) {
    return (
        objeto.map((el) => (
            <Item key={el.nombre} nombre={el.nombre} imagen={el.imagen} precio={el.precio} descripcion={el.descripcion}/>
        ))
    );
}

export default ItemList