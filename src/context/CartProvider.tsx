
import React from 'react';
import { actionType, carritoReducer, initialState } from '../utils/CartReducer';
import { CartContextType, Item } from '../types/types';

const CartContext = React.createContext<CartContextType>({
    carritoState: initialState,
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    toggleCart: () => { },
    isCartOpen: false
})

const useCart = () => {

    /**funcion para abrir o cerrar el carrito */
    const [isCartOpen, setIsCartOpen] = React.useState(false);


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

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

    /**vaciar carrito */

    const clearCart = () => {
        dispatch({
            type: actionType.CLEAR_CART
        })
    }

    return { carritoState, addToCart, removeFromCart, clearCart, toggleCart, isCartOpen }
}

interface Props {
    children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
    const { carritoState, addToCart, removeFromCart, clearCart, toggleCart, isCartOpen } = useCart()

    return <CartContext.Provider value={
        {
            carritoState,
            addToCart,
            removeFromCart,
            clearCart,
            toggleCart,
            isCartOpen
        }
    }>
        {children}
    </CartContext.Provider>
}

export { useCart, CartProvider, CartContext };