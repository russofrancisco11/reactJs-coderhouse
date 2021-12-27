import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./CartWidget"

function NavBar() {
    return (
      <div className="nav">
        <header className="encabezado">
          <nav class="navbar navbar-expand-lg navbar-light bg-danger">
            <div class="container-fluid">
              <a class="navbar-brand"><NavLink exact to="/">Pipa Fit</NavLink></a>
              <Cart />
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page"><NavLink exact to="/">Home</NavLink></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Productos
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item"><NavLink exact to="/category/Barras">Barras</NavLink></a></li>
                      <li><a class="dropdown-item"><NavLink exact to="/category/Discos">Discos</NavLink></a></li>
                      <li><a class="dropdown-item"><NavLink exact to="/category/Mancuernas">Mancuernas</NavLink></a></li>
                      <li><a class="dropdown-item"><NavLink exact to="/category/Pisos">Pisos</NavLink></a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><NavLink exact to="/Nosotros">Nosotros</NavLink></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  
  export default NavBar;