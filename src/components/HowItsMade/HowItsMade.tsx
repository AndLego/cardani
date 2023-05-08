import style from "./HowItsMade.module.css"

const HowItsMade = () => {
    return (
        <section className={style.how}>
            <article>
                <h5>¿Como lo hacemos?</h5>
                <p>Nuestros insumos son comprados directamente a los campesinos de nuestro país.</p>
                <img className="manchita" src="https://ahconsultora.com/wp-content/uploads/2022/12/manchita-celeste.svg" alt="" />
            </article>
            <article>
                <div>
                    <img src="https://www.goldenacrewines.co.uk/wp-content/uploads/2020/04/eee.png" alt="Harina" />
                    <h4>Harina</h4>
                    <p>Ingrediente fresco traido del mercado mas cercano.</p>
                </div>
                <div>
                    <img src="https://highlandhealthstore.co.uk/wp-content/uploads/2021/02/Perthsire-Heather-Honeycomb.png" alt="Miel" />
                    <h4>Miel</h4>
                    <p>Ingrediente fresco traido del mercado mas cercano.</p>
                </div>
                <div>
                    <img src="https://www.olivelarocca.it/wp-content/uploads/2019/11/olive-dolci-giganti-grecia-larocca-fs-400x400.png" alt="Oliva" />
                    <h4>Oliva</h4>
                    <p>Ingrediente fresco traido del mercado mas cercano.</p>
                </div>
                <div>
                    <img src="https://aszfruit.com/wp-content/uploads/2021/02/Block-Berries-300x300.png" alt="Fruta" />
                    <h4>Fruta</h4>
                    <p>Ingrediente fresco traido del mercado mas cercano.</p>
                </div>
            </article>
        </section>
    );
}

export default HowItsMade;