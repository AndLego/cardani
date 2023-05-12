
import React from 'react';
import { actionType, carritoReducer, initialState } from '../../utils/CartReducer';
import { CartContextType, Item } from '../types/types';

const CartContext = React.createContext<CartContextType>({
    carritoState: initialState,
    addToCart: () => { },
    removeFromCart: () => { },

})

const useCart = () => {
    /**funciones para el manejo del carrito */

    const [carritoState, dispatch] = React.useReducer(carritoReducer, initialState)

    console.log(carritoState, "estado")

    /**agregar item */
    const addToCart = (item: Item) => {
        dispatch({
            type: actionType.ADD_TO_CART,
            payload: item
        })
    }
    /**elminar unidad */
    const removeFromCart = (id: number) => {
        dispatch({
            type: actionType.REMOVE_FROM_CART,
            payload: { id }
        })
    }

    return { carritoState, addToCart, removeFromCart }
}

interface Props {
    children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
    const { carritoState, addToCart, removeFromCart } = useCart()

    return <CartContext.Provider value={
        {
            carritoState,
            addToCart,
            removeFromCart
        }
    }>
        {children}
    </CartContext.Provider>
}

export { useCart, CartProvider, CartContext };