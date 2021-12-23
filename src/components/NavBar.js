import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./CartWidget"

function NavBar() {
    return (
      <div className="nav">
        <header className="encabezado">
                <nav class="navbar fixed-top navbar-light fixed-top bg-danger" >
                    <div class="container-fluid">
                        <div class="container">
                        <span class="navbar-brand mb-0 h1"><NavLink to="/"></NavLink>Pipa Fit</span>
                        </div>
                        <div class="container-fluid">
                          <Cart />
                        </div>
                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href=""><NavLink to="/"></NavLink>Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Productos
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                  <li><a class="dropdown-item" href=""><NavLink to="/category/"></NavLink>Barras</a></li>
                                  <li><a class="dropdown-item" href=""><NavLink to="/category/"></NavLink>Discos</a></li>
                                  <li><a class="dropdown-item" href=""><NavLink to="/category/"></NavLink>Mancuernas</a></li>
                                  <li><a class="dropdown-item" href=""><NavLink to="/category/"></NavLink>Pisos</a></li>
                                </ul>
                              </li>
                            <li class="nav-item">
                              <a class="nav-link" href="secciones/seccionoldshakesperians.html"><NavLink to="/Nosotros"></NavLink>Nosotros</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </nav>
        </header>
      </div>
    );
  }
  
  export default NavBar;