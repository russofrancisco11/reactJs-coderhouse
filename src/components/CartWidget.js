import React from "react";
import carro from "../images/png-carrito.png"

function Cart () {
    return (
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={carro} alt="carrito" width="30" height="24"/>
            </a>
        </div>
    );
}

export default Cart;