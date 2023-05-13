import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
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

                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="par" ><path fill="currentColor" d="M814 661.5Q687 823 513 800.5T223.5 639Q108 500 219 352.5T513 183q183-22 305.5 147.5t-4.5 331Z" /></clipPath>
                        <path id="parb" fill="none" stroke="#daa520" stroke-width="10" d="M814 661.5Q687 823 513 800.5T223.5 639Q108 500 219 352.5T513 183q183-22 305.5 147.5t-4.5 331Z" />
                    </defs>

                    <image
                        width="720"
                        height="720"
                        preserveAspectRatio="xMidYMid slice"
                        xlinkHref={producto.img}
                        clipPath="url(#par)"
                        x="16%"
                        y="9%"
                    />
                    <use href="#parb" />
                </svg>

                <span className={style.precio}>{producto.price}k</span>
            </div>

        </article>
    );
}


export default ProductoPar;