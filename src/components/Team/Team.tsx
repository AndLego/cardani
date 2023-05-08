import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import style from "./Team.module.css"

const Team = () => {
    return (
        <section className={style.team}>
            <article>
                <h2>Estar en tu Mesa</h2>
                <h1>Nuestra Pasion</h1>
            </article>
            <article>
                <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="Carlos" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto vitae odit neque minus fugit amet tempora corporis enim, optio.</p>
                <Btn_Ordena />
            </article>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iusto vitae odit neque minus fugit amet tempora corporis enim, optio.</p>
                <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="Dani" />
            </article>
        </section>
    );
}

export default Team;

//  <h1>El equipo</h1>
//             <p>Trabajamos con amor para dar el mejor servicio a nuestros clientes, transmitiendo nuestros sentimientos en cada preparacion</p>
//             <div className={style.shadow}></div>

//             <article className={style.chefs}>
//                 <div>
//                     <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="chef1" />
//                     <div>
//                         <h2>Carlos Moreno</h2>
//                         <p>Con la experiencia de mil y un panaderos en el mas reconditos lugares del valhalla , hoy aporta toda su pasion en cada pan</p>
//                     </div>
//                 </div>

//                 <div>
//                     <img src="https://i.pinimg.com/originals/ba/34/89/ba3489b12c6b4af3efcbae3040c3861b.png" alt="chef1" />
//                     <div>
//                         <h2>Carlos Moreno</h2>
//                         <p>Con la experiencia de mil y un panaderos en el mas reconditos lugares del valhalla , hoy aporta toda su pasion en cada pan</p>
//                     </div>
//                 </div>

//             </article>

//             