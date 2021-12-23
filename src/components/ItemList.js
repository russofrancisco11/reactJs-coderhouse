import React from "react";
import Item from "./Item";

function ItemList ({objeto}) {
    return (
        objeto.map((el) => (
            <Item key={el.id} nombre={el.title} imagen={el.thumbnail} precio={el.price}/>
        ))
    );
}

export default ItemList