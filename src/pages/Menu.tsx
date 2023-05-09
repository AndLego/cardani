import React from 'react';
import style from "./styles/Menu.module.css"
import { Catalogo } from "../components";
import { elMenu } from '../utils/Productos';

const Menu = () => {
    const [indiceProductos, setIndiceProductos] = React.useState(1)

    //el indice no indica que categoria se renderiza ej: elMenu[1] === ojaldres
    const elegirCategoria = (index: number) => {
        setIndiceProductos(index)
    }

    return (
        <section className={style.menu}>
            <article className={style.info}>
                <h1>Disfruta al mejor precio</h1>
                <p>Cardanni es una panaderia artesanal en la que todos los panes son hechos con amor y pasion. Nuestra mision es traer el arte del pan a sus raices y compartir con otros en sus mesas</p>
            </article>

            <ul className={style.indice}>
                {elMenu.map((categoria, index) => (
                    <li key={index} className={index === indiceProductos ? style.actual : ""} onClick={() => elegirCategoria(index)}>
                        {categoria.categoria}
                    </li>
                ))}
            </ul>

            <Catalogo productos={elMenu[indiceProductos].productos} />
        </section>
    );
}

export default Menu;