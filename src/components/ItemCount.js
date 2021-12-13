import React, {useState} from "react";
import "./ItemCount.css";

const ItemCount = ({initialValue = 0, stock = 10}) => {
    const [value, setValue] = useState(initialValue);

    const añadir = () => {
        if (value < stock) setValue((prev) => prev + 1);
        else alert("Máximo alcanzado")
    };

    const restar = () => {
        if (value > 0) setValue((prev) => prev - 1);
        else alert("El valor ya es 0")
    };

    return (
        <div className="contenedorBotones">
            <button className="botonSumar" onClick={añadir}>
                Añadir
            </button>
            <p className="value">
                {value}
            </p>
            <button className="botonRestar" onClick={restar}>
                Restar
            </button>
        </div>
    );
};

export default ItemCount