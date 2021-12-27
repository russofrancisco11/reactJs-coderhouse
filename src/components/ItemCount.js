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

    const submit = () => {

    }

    return (
        <div className="contenedorBotones">
            <div className="botonesCantidad">
                <button className="botonSumar" onClick={añadir}>
                    Sumar
                </button>
                <p className="value">
                    {value}
                </p>
                <button className="botonRestar" onClick={restar}>
                    Restar
                </button>
            </div>
            <div className="botonMandarCarrito">
                <button className="botonSubmit" onClick={submit}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount