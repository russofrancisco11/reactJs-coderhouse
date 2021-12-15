import React from "React";
import Item from "./Item";

function ItemList ({items}) {
    return (
        items.map((el) => (
            <Item key={el.nombre} nombre={el.nombre} imagen={el.imagen} precio={el.precio} descripcion={el.descripcion}/>
        ))
    )
}

export default ItemList