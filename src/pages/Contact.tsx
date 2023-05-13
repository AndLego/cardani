import React from 'react';
import style from "./styles/Contact.module.css"

const Contact = () => {
    /**codigo para el formulario */
    const nombreRef = React.useRef<HTMLInputElement>(null);
    const correoRef = React.useRef<HTMLInputElement>(null);
    const telefonoRef = React.useRef<HTMLInputElement>(null);
    const mensajeRef = React.useRef<HTMLTextAreaElement>(null);

    const crearTextoPedido = () => {
        let mensaje = `Hola, mi nombre es ${nombreRef.current?.value}. `;
        mensaje += `Mi correo electrónico es ${correoRef.current?.value}. `;
        mensaje += `Mi número de teléfono es ${telefonoRef.current?.value}. `;
        mensaje += `Quiero hacer el siguiente pedido: ${mensajeRef.current?.value}.`;

        return mensaje;
    };

    const enviarPedido = () => {
        const textoPedido = encodeURIComponent(crearTextoPedido());
        window.open(`https://wa.me/573016844548?text=${textoPedido}`, '_blank');
    };

    return (
        <section className={style.Contact}>
            <article>
                <div className={style.Service}>
                    <h1>CATERING</h1>
                    <p>¡Creamos para ti barras de pasabocas y cafe! cuentanos cual es tu requerimiento, nosotros lo hacemos realidad.</p>
                </div>
                <div className={style.Service}>
                    <h1>CATERING</h1>
                    <p>¡Creamos para ti barras de pasabocas y cafe! cuentanos cual es tu requerimiento, nosotros lo hacemos realidad.</p>
                </div>
                <div className={style.Service}>
                    <h1>CATERING</h1>
                    <p>¡Creamos para ti barras de pasabocas y cafe! cuentanos cual es tu requerimiento, nosotros lo hacemos realidad.</p>
                </div>
            </article>

            <h1>Registra tus datos y te contactaremos lo antes posible para cotizar tus requerimientos.</h1>

            <form onSubmit={enviarPedido}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" ref={nombreRef} required />

                <label htmlFor="correo">Correo electrónico:</label>
                <input type="email" id="correo" ref={correoRef} required />

                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" ref={telefonoRef} required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" ref={mensajeRef} required />

                <button type="submit">Enviar</button>
            </form>

        </section>
    );
}

export default Contact;