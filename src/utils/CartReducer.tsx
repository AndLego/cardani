import { Action, Item, State } from "../types/types";

// Para evitar typos
export const actionType = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

/**estado inicial */

export const initialState: State = {
    items: []
}

export const carritoReducer = (state: State, action: Action) => {
    switch (action.type) {

        case actionType.ADD_TO_CART:
            if (!action.payload) return state;

            const existingItemIndex = state.items.findIndex(newItem => newItem.id === action.payload?.id)
            /**si el objeto existe, creamos una constante con el valor de los items del carrito, buscamos
             * el objeto en cuestion y le incrementamos su cantidad en 1, 
             * devolvemos al final la lista actualizada
            */
            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items]

                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    qty: updatedItems[existingItemIndex].qty + 1
                }

                return {
                    ...state,
                    items: updatedItems
                }
            } else {
                /**si el objeto no existe, crea uno nuevo */
                const newItem: Item = {
                    id: (action.payload as Item).id,
                    name: (action.payload as Item).name,
                    price: (action.payload as Item).price,
                    qty: 1,
                    img: (action.payload as Item).img
                };
                return {
                    ...state,
                    items: [
                        ...state.items,
                        newItem
                    ]
                }
            }


        case actionType.REMOVE_FROM_CART:
            if (!action.payload) return state;
            const findItemIndex = state.items.findIndex((item) => item.id === action.payload?.id);
            if (findItemIndex !== -1) {
                const updatedItems = [...state.items];
                const existingItem = updatedItems[findItemIndex];
                const updatedItem = {
                    ...existingItem,
                    qty: existingItem.qty - 1,
                };
                if (updatedItem.qty <= 0) {
                    updatedItems.splice(findItemIndex, 1);
                } else {
                    updatedItems[findItemIndex] = updatedItem;
                }
                return {
                    ...state,
                    items: updatedItems,
                };
            }
            return state;

        case actionType.CLEAR_CART:
            return {
                ...state,
                items: []
            }

        default:
            return state
    }
}