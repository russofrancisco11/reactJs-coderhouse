import React from "react";
import Articulo from "./Articulo";

function ItemList ({objeto}) {
    return (
        objeto.map((el) => (
            <Articulo key={el.nombre} nombre={el.nombre} imagen={el.imagen} precio={el.precio} descripcion={el.descripcion}/>
        ))
    );
}

export default ItemList