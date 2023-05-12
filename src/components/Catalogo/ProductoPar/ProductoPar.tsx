import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import blob1 from "/blob1.svg"
import flecha from "/flecha.svg"
import style from "../Catalogo.module.css"
import { CartContext } from '../../../context/CartProvider';
import { Producto, ProductoProps } from '../../../types/types';

const ProductoPar = ({ producto }: ProductoProps) => {

    const { addToCart, toggleCart } = React.useContext(CartContext)

    /**comportamiento para el boton de carga */
    const [btnLoading, setBtnLoading] = React.useState(false)

    const handleAddItem = (producto: Producto) => {
        setBtnLoading(true)

        addToCart({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            qty: 1,
            img: producto.img
        })

        toggleCart()

        setTimeout(() => {
            setBtnLoading(false); // desactiva el estado de carga temporal después de 2 segundos
        }, 1500);
    }

    return (
        <article key={producto.id} className={style.articulo}>
            <div className={`${style.info} ${style.infoPar}`}>
                <h2>{producto.name}</h2>
                <p>{producto.descripcion} {producto.opcional}</p>
                <button onClick={() => handleAddItem(producto)}>

                    {btnLoading ? (
                        <div className={style.loader}></div>
                    ) : (
                        <>
                            <span>Agregar al carrito</span>
                            <BsCartPlusFill className={style.addImpar} />
                        </>
                    )}

                </button>
            </div>

            <img className={style.abajo} src={flecha} alt="" />

            <div className={style.img}>
                <img className={style.blob} src={blob1} alt="blob" />
                <img className={style.imgProducto} src={producto.img} alt={producto.name} />
                <span className={style.precio}>{producto.price}k</span>
            </div>

        </article>
    );
}


export default ProductoPar;