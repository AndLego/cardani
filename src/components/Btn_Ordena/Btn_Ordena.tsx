import { TbBaguette, TbArrowNarrowRight } from 'react-icons/tb';
import { Link } from "react-router-dom";
import style from "./Btn_Ordena.module.css"

const Btn_Ordena = () => {
    return (
        <Link
            to="/menu"
            className={style.button}>

            <TbBaguette />
            Ordena Ya
            <TbArrowNarrowRight />

        </Link>
    );
}

export default Btn_Ordena;