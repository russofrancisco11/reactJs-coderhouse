import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

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
            <ItemDetail item={item}/>
        </div>
    );
};

export default ItemDetailContainer