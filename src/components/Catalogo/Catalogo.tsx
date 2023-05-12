import style from "./Catalogo.module.css"
import ProductoPar from './ProductoPar/ProductoPar';
import ProductoImpar from './ProductoImpar/ProductoImpar';
import { Producto } from "../../types/types";

type CatalogoProps = {
    productos: Producto[]
}

const Catalogo = ({ productos }: CatalogoProps) => {
    /**validador para indices impares o pares */
    const esImpar = (id: number) => {
        return id % 2 !== 0
    }

    /**hook manejo de carrito */

    return (
        <section className={style.contenedorProductos}>
            {productos.map((producto) => {
                return esImpar(producto.id) ?
                    // indices PARES
                    <ProductoImpar key={producto.id} producto={producto} /> :
                    // indices IMPARES
                    <ProductoPar key={producto.id} producto={producto} />
            }
            )}
        </section>
    );
}

export default Catalogo;