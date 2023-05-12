import React from 'react';
import { AiOutlineClose, AiFillDelete } from 'react-icons/ai';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import style from "./Carrito.module.css"
import { CartContext } from '../../context/CartProvider';

interface CarritoProps {
    toggleCart: () => void;
}


const Carrito = ({ toggleCart }: CarritoProps) => {

    const { carritoState, addToCart, removeFromCart, clearCart } = React.useContext(CartContext)

    /**funcion para el total de la compra */

    const handleTotal = () => {
        const total = carritoState.items.reduce((accum, item) => {
            return accum + (item.price * item.qty);
        }, 0);

        return parseFloat(total.toFixed(2))
    }

    /**funcion para realizar el pedido via whatsapp */

    const crearTextoPedido = () => {
        let mensaje = "¡Hola! Quiero hacer el pedido de:\n\n";
        carritoState.items.forEach((producto) => {
            mensaje += `${producto.qty} x ${producto.name} por $${parseFloat((producto.price * producto.qty).toFixed(2))}\n, `;
        });
        mensaje += `\nTotal: $${handleTotal()}\n`;

        return mensaje;
    }

    const enviarPedido = () => {
        const textoPedido = encodeURIComponent(crearTextoPedido());
        window.open(`https://wa.me/573016844548?text=${textoPedido}`, '_blank');
    }

    return (
        <div className={style.comprando} >
            <section className={style.vacio} onClick={toggleCart}></section>
            <section className={style.carrito}>
                <div>
                    <AiOutlineClose className={style.closeCart} onClick={toggleCart} />
                    <h2>Carrito de compra</h2>
                    <button className={style.btnVaciar} onClick={() => clearCart()}>
                        <AiFillDelete />
                        Vaciar
                    </button>
                </div>
                <div className={style.items}>
                    {/* <!-- Aquí se mostrarán los elementos del carrito --> */}
                    {carritoState.items.map((item) => (
                        <div className={style.producto} key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div>
                                <p>{item.name}</p>
                                <div className={style.cantidades}>
                                    <button onClick={() => removeFromCart(item.id)}>
                                        <GrFormSubtract />
                                    </button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => addToCart({
                                        id: item.id,
                                        name: item.name,
                                        price: item.price,
                                        qty: 1
                                    })}>
                                        <GrFormAdd />
                                    </button>
                                </div>
                            </div>

                            <p>${parseFloat((item.price * item.qty).toFixed(2))}</p>
                        </div>
                    ))}
                </div>
                <div className={style.total}>
                    <h3>Total: <span>$ {handleTotal()}</span> </h3>
                    <button onClick={enviarPedido}>Hacer Pedido</button>
                </div>
            </section>
        </div>

    );
}

export default Carrito;