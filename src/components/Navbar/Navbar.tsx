import { AiOutlineShopping } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.svg"
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <Link to="/">
                <img src={logo} alt="cardanni logo" />
            </Link>
            <ul>
                {rutas.map(ruta => (
                    <li key={ruta.id}>
                        <NavLink
                            to={ruta.to}
                            style={({ isActive }) => (
                                {
                                    color: isActive ? "var(--dorado)" : "var(--fondo-negro)",
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