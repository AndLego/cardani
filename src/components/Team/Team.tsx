import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import style from "./Team.module.css"

const Team = () => {
    return (
        <section className={style.team}>
            <article>
                <h2>Estar en tu Mesa</h2>
                <h1>Nuestra Pasion</h1>
                <img className="manchita" src="https://ahconsultora.com/wp-content/uploads/2022/12/manchita-celeste.svg" alt="" />
            </article>
            <article>
                <img className={style.chef} src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/SouthParkChef.png/180px-SouthParkChef.png" alt="Carlos" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto vitae odit neque minus fugit amet tempora corporis enim, optio.</p>
                <Btn_Ordena />
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto vitae odit neque minus fugit amet tempora corporis enim, optio.</p>
                <img className={style.chef} src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/SouthParkChef.png/180px-SouthParkChef.png" alt="Dani" />
            </article>
        </section>
    );
}

export default Team;
