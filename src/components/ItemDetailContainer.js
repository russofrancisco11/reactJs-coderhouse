import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const [value, setValue] = useState (0);

    const resta = () => setValue((prev) => prev - 1);
    const suma = (stock, value) =>{
        if (value < stock) setValue((prev) => prev + 1)
    };

    useEffect(() =>{
        baseDatos();
    },[]);

    const baseDatos = async () => {
        const call = await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=launchpad"
        );

        if (call.ok) {
            const response = await call.json();
            setItem(response.results.find((item) => item.price > 90000));
        } else {
            call.catch((err) => {
                throw new Error ("Algo salió mal", err)
            });
        }
    };

    return (
        <div className="ListContainer">
            {item?.length ?? (
                <div>
                    <p>{item.title}</p>
                    <img src={item.thumbnail} style={{ width: 250}}/>
                </div>
            )}
            <ItemCount initialValue={value} stock={5} />
        </div>
    );
};

export default ItemDetailContainer