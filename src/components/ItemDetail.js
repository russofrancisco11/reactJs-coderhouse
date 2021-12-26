import ItemCount from "./ItemCount"

const ItemDetail = ({title, thumbnail}) => {
    return (
        <div className="ListContainer">
            <div>
                <p>{title}</p>
                <img src={thumbnail} style={{ width: 250}}/>
            </div>
            <ItemCount initialValue={0} stock={10} />
        </div>
    )
}

export default ItemDetail
