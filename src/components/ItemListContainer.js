import React, {useState, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
    
    const {name} = useParams() || ""
    const [state, setState] = useState([])

    const getAPI = async () => {
        let API, res;
        switch (name) {
            case "Barras":
                API = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA65820")
                res = await API.json()
                break;
            case "Discos":
                API = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA65864")
                res = await API.json()
                break;
            case "Mancuernas":
                API = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA65816")
                res = await API.json()
                break;
            case "Pisos":
                API = await fetch ("https://api.mercadolibre.com/sites/MLA/search?category=MLA321226")
                res = await API.json()
                break;
        }
        return res
    }

    useEffect(() => {
        getAPI(name).then((res) => setState(res.data))
    }, [name])

    return(
        <>
        <div className="ListContainer">
            {state.map((value) =>{
                return <div><NavLink to={`item/${value.name}`}></NavLink>{value.name}</div>
            })}
        </div>
        </>
    );
}

export default ItemListContainer


/*let objeto = [
    {
        nombre: "Barra olímpica",
        imagen: "#",
        precio: "25.000",
        descripcion: "Barra cono rodamientos, 20 kg, 2.20 metros de largo",
    },
    {
        nombre: "Barra olímpica para mujeres",
        imagen: "#",
        precio: "22.000",
        descripcion: "Barra cono rodamientos, 15 kg, 2.00 metros de largo",
    },
    {
        nombre: "Barra olímpica w",
        imagen: "#",
        precio: "15",
        descripcion: "Barra cono rodamientos, 12 kg, 1.50 metros de largo",
    },
]
*/