import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
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

                <svg className={style.blobImpar} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="a" ><path fill="currentColor" d="M780.5 648.5Q671 797 482.5 826.5T218.5 678q-75.5-178 0-356.5t276-169.5q200.5 9 298 178.5t-12 318Z" /></clipPath>
                        <path id="b" fill="none" stroke="#daa520" stroke-width="10" d="M780.5 648.5Q671 797 482.5 826.5T218.5 678q-75.5-178 0-356.5t276-169.5q200.5 9 298 178.5t-12 318Z" />
                    </defs>
                    <image
                        width="700"
                        height="700"
                        preserveAspectRatio="xMidYMid slice"
                        xlinkHref={producto.img}
                        clipPath="url(#a)"
                        x="15%"
                        y="15%"
                    />
                    <use href="#b" />
                </svg>

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