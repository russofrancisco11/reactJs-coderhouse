import React from "react";
import { NavLink } from "react-router-dom";
import carro from "../assets/images/png-carrito.png"

function Cart () {
    return (
        <div class="container">
            <a class="navbar-brand">
                <NavLink exact to="/cart">
                    <img src={carro} alt="carrito" width="30" height="24"/>
                </NavLink> 
            </a>
        </div>
    );
}

export default Cart;