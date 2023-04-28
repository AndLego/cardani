import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import style from "./Cover.module.css"

const Cover = () => {
    return (
        <section className={style.cover}>
            <article>
                <div></div>
            </article>
            <article>
                <h1>Cardanni</h1>
                <h5>PANADERIA ARTESANAL</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio nobis possimus placeat commodi odit repudiandae nulla magni expedita sint optio est aperiam ullam totam, culpa mollitia consectetur molestiae dolorem?</p>

                <Btn_Ordena />
            </article>
        </section>
    );
}

export default Cover;