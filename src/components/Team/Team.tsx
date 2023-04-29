import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import style from "./Team.module.css"

const Team = () => {
    return (
        <section className={style.team}>
            <h1>El equipo</h1>
            <p>Trabajamos con amor para dar el mejor servicio a nuestros clientes, transmitiendo nuestros sentimientos en cada preparacion</p>
            <div className={style.shadow}></div>

            <article className={style.chefs}>
                <div>
                    <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="chef1" />
                    <div>
                        <h2>Carlos Moreno</h2>
                        <p>Con la experiencia de mil y un panaderos en el mas reconditos lugares del valhalla , hoy aporta toda su pasion en cada pan</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="chef1" />
                    <div>
                        <h2>Carlos Moreno</h2>
                        <p>Con la experiencia de mil y un panaderos en el mas reconditos lugares del valhalla , hoy aporta toda su pasion en cada pan</p>
                    </div>
                </div>

            </article>

            <Btn_Ordena />
        </section>
    );
}

export default Team;