import { AiOutlineShopping } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <img src="https://i.postimg.cc/ZKBtrCSP/cardanni-logo.png" alt="cardanni logo" />
            <ul>
                {rutas.map(ruta => (
                    <li>
                        <NavLink
                            key={ruta.id}
                            to={ruta.to}
                            style={({ isActive }) => (
                                {
                                    color: isActive ? "var(--boton1)" : "var(--fondo-negro)",
                                    fontWeight: isActive ? "600" : "400"
                                }

                            )}
                        >
                            {ruta.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <AiOutlineShopping />
        </nav>
    );
}

export default Navbar;

const rutas: Ruta[] = [
    {
        id: 1,
        to: "/",
        text: "Home",
        private: false,
    },
    {
        id: 2,
        to: "/menu",
        text: "Menu",
        private: false,
    },
    {
        id: 3,
        to: "/contact",
        text: "Contact",
        private: false,
    },
]

interface Ruta {
    id: number,
    to: string,
    text: string,
    private: boolean
}