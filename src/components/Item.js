
const Item = ({nombre, imagen, precio, descripcion}) => {
    return (
        <div className="Item">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre}></img>
            <p>${precio}</p>
            <p>{descripcion}</p>
        </div>
    )
}

export default Item
/*
const Item = ({nombre, imagen, precio, descripcion}) => {
    return (
        <div className="Item">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre}></img>
            <p>${precio}</p>
            <p>{descripcion}</p>  
        </div>
    )
}

export default Item
*/