import { TbBaguette, TbArrowNarrowRight } from 'react-icons/tb';
import style from "./Btn_Ordena.module.css"

const Btn_Ordena = () => {
    return (
        <button className={style.button}>
            <TbBaguette />
            Ordena Ya
            <TbArrowNarrowRight />
        </button>
    );
}

export default Btn_Ordena;