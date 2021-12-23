
const Item = ({title, thumbnail, price}) => {
    return (
        <div className="Item">
            <h2>{title}</h2>
            <img src={thumbnail} alt={title}></img>
            <p>${price}</p>
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