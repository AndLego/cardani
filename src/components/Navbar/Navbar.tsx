import { AiOutlineShopping } from 'react-icons/ai';
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <img src="https://i.postimg.cc/ZKBtrCSP/cardanni-logo.png" alt="cardanni logo" />
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <AiOutlineShopping/>
        </nav>
    );
}

export default Navbar;