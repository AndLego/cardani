import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import blob2 from "/blob2.svg"
import flecha from "/flecha.svg"
import style from "../Catalogo.module.css"
import { Producto, ProductoProps } from '../../../types/types';
import { CartContext } from '../../../context/CartProvider';

const ProductoImpar = ({ producto }: ProductoProps) => {

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
            <div className={style.img}>
                <img className={`${style.blob} ${style.blobImpar}`} src={blob2} alt="blob" />
                <img className={style.imgProducto} src={producto.img} alt={producto.name} />
                <span className={style.precio}>{producto.price}k</span>
            </div>

            <img className={style.arriba} src={flecha} alt="" />

            <div className={`${style.info} ${style.infoImpar}`}>
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

        </article>
    );
}

export default ProductoImpar;