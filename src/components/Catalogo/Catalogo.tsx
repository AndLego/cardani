import React from 'react';
import style from "./Catalogo.module.css"
import { BsCartPlusFill } from 'react-icons/bs';
import blob1 from "/blob1.svg"
import blob2 from "/blob2.svg"
import flecha from "/flecha.svg"
import { Producto } from '../../utils/Productos';
import { CartContext } from "../context/CartProvider";

type CatalogoProps = {
    productos: Producto[]
}

const Catalogo = ({ productos }: CatalogoProps) => {
    /**validador para indices impares o pares */
    const esImpar = (id: number) => {
        return id % 2 !== 0
    }

    /**hook manejo de carrito */
    const { addToCart } = React.useContext(CartContext)

    return (
        <section className={style.contenedorProductos}>
            {productos.map((producto) => {
                return esImpar(producto.id) ?
                    // indices PARES
                    (<article key={producto.id} className={style.articulo}>
                        <div className={`${style.info} ${style.infoPar}`}>
                            <h2>{producto.nombre}</h2>
                            <p>{producto.descripcion} {producto.opcional}</p>
                            <button onClick={
                                () =>
                                    addToCart({
                                        id: producto.id,
                                        name: producto.nombre,
                                        price: producto.precio,
                                        qty: 1,
                                        img: producto.img
                                    })}>
                                <span>Agregar al carrito</span>
                                <BsCartPlusFill className={style.addPar} />
                            </button>
                        </div>

                        <img className={style.abajo} src={flecha} alt="" />

                        <div className={style.img}>
                            <img className={style.blob} src={blob1} alt="blob" />
                            <img className={style.imgProducto} src={producto.img} alt={producto.nombre} />
                            <span className={style.precio}>{producto.precio}k</span>
                        </div>

                    </article>) :
                    // indices IMPARES
                    (<article key={producto.id} className={style.articulo}>
                        <div className={style.img}>
                            <img className={`${style.blob} ${style.blobImpar}`} src={blob2} alt="blob" />
                            <img className={style.imgProducto} src={producto.img} alt={producto.nombre} />
                            <span className={style.precio}>{producto.precio}k</span>
                        </div>

                        <img className={style.arriba} src={flecha} alt="" />

                        <div className={`${style.info} ${style.infoImpar}`}>
                            <h2>{producto.nombre}</h2>
                            <p>{producto.descripcion} {producto.opcional}</p>
                            <button onClick={
                                () =>
                                    addToCart({
                                        id: producto.id,
                                        name: producto.nombre,
                                        price: producto.precio,
                                        qty: 1
                                    })}>
                                <span>Agregar al carrito</span>
                                <BsCartPlusFill className={style.addImpar} />
                            </button>
                        </div>

                    </article>)
            }
            )}
        </section>
    );
}

export default Catalogo;