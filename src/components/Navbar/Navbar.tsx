import React from 'react';
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { CgMenuCake } from 'react-icons/cg';
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg"
import style from "./Navbar.module.css"
import Carrito from '../Carrito/Carrito';
import { CartContext } from '../../context/CartProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { toggleCart, isCartOpen, carritoState } = React.useContext(CartContext)

    React.useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('hidden-scroll');
        } else {
            document.body.classList.remove('hidden-scroll');
        }
    }, [isCartOpen]);

    /**contador de items del carrito */

    const handleQuantity = () => {
        let totalQuantity = 0;
        carritoState.items.forEach((item) => {
            totalQuantity += item.qty;
        });
        console.log(totalQuantity)
        return totalQuantity;
    }

    return (
        <nav className={style.nav}>
            <Link to="/" className={style.logo} >
                <img src={logo} alt="cardanni logo" />
            </Link>

            {/* Botón para abrir el menú modal en pantallas más pequeñas */}
            <CgMenuCake
                className={style.menu}
                onClick={toggleMenu}
            />

            {/* Menú de navegación en pantallas grandes */}
            <ul className={style.navPantallaGrande}>
                {rutas.map((ruta) => (
                    <li key={ruta.id}>
                        <NavLink
                            to={ruta.to}
                            style={({ isActive }) => ({
                                color: isActive ? "var(--dorado)" : "var(--fondo-negro)",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            {ruta.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Icono de carrito */}
            <div className={style.CarritoBtn}>
                <AiOutlineShopping className={style.cart} onClick={toggleCart} />
                {
                    carritoState.items.length !== 0 &&
                    <div className={style.Cantidad}>{handleQuantity()}</div>
                }
            </div>
            {isCartOpen && <Carrito toggleCart={toggleCart} />}

            {/* Menú modal en pantallas más pequeñas */}
            {isMenuOpen && (
                <div className={style.modal}>
                    <ul>
                        <AiOutlineClose className={style.close} onClick={toggleMenu} />
                        {rutas.map((ruta) => (
                            <li key={ruta.id}>
                                <NavLink
                                    to={ruta.to}
                                    style={({ isActive }) => ({
                                        color: isActive ? "var(--dorado)" : "var(--fondo-negro)",
                                        fontWeight: isActive ? "600" : "400",
                                    })}
                                    onClick={toggleMenu} // Cerrar menú modal al hacer clic en una ruta
                                >
                                    {ruta.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
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
