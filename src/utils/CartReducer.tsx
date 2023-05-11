export interface Item {
    id: number;
    name: string;
    price: number;
    qty: number
}

export interface State {
    items: Item[];
}

export const actionType = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART"
}

interface ADD_TO_CART {
    type: typeof actionType.ADD_TO_CART;
    payload?: Item;
}

interface REMOVE_FROM_CART {
    type: typeof actionType.REMOVE_FROM_CART;
    payload?: { id: number };
}

type Action = ADD_TO_CART | REMOVE_FROM_CART

// ----------


export const initialState: State = {
    items: []
}

export const carritoReducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }

        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                items:
                    state.items.filter(item => item.id !== action.payload?.id)
            }
        default:
            return state
    }
}
