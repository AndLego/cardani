import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';
import style from "./Carrito.module.css"
import { CartContext } from '../context/CartProvider';

interface CarritoProps {
    toggleCart: () => void;
}


const Carrito = ({ toggleCart }: CarritoProps) => {

    const { carritoState, addToCart, removeFromCart } = React.useContext(CartContext)

    return (
        <div className={style.comprando} >
            <section className={style.vacio} onClick={toggleCart}></section>
            <section className={style.carrito}>
                <div>
                    <AiOutlineClose className={style.closeCart} onClick={toggleCart} />
                    <h2>Carrito de compra</h2>
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
                    <h3>Total: <span>40000</span> </h3>
                    <button>Hacer Pedido</button>
                </div>
            </section>
        </div>

    );
}

export default Carrito;

const prueba = [
    {
        id: 1,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 2,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 3,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 4,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 5,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 6,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 7,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
    {
        id: 8,
        nombre: "pan de mantquiella con pistacho",
        cantidad: 7,
        precio: 15,
        img: "https://firebasestorage.googleapis.com/v0/b/jibaro-restaurant.appspot.com/o/Images%2F1668714273062-c3.png?alt=media&token=c8144e06-7e38-4513-b11d-3e32fc85e3a1"
    },
]