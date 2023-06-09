import { actionType } from "../utils/CartReducer";

/**types para el reducer */
export interface Item {
    id: number;
    name: string;
    price: number;
    qty: number,
    img?: string
}

export interface State {
    items: Item[];
}

export interface ADD_TO_CART {
    type: typeof actionType.ADD_TO_CART;
    payload?: Item;
}

export interface REMOVE_FROM_CART {
    type: typeof actionType.REMOVE_FROM_CART;
    payload?: { id: number };
}

export interface CLEAR_CART {
    type: typeof actionType.CLEAR_CART;
    payload?: { id: number };
}

export type Action = ADD_TO_CART | REMOVE_FROM_CART | CLEAR_CART


/**types para el context */

export type CartContextType = {
    carritoState: State;
    addToCart: (item: Item) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    isCartOpen: boolean
};


/**types para prductos par e impar */

export type ProductoProps = {
    producto: Producto;
}

/**types para el array de productos */
export interface Producto {
    id: number,
    name: string,
    price: number,
    img: string,
    descripcion?: string,
    opcional?: string
}

export interface Categoria {
    categoria: string,
    productos: Producto[]
}