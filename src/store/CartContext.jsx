import {createContext, useReducer} from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {
    },
    removeItem: (id) => {
    },
})

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex];
            updatedItems[existingItemIndex] = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            });
        }

        return {
            ...state,
            items: updatedItems
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        // .. update the state to remove a meal item
    }

    return state;
}

export function CartContextProvider({children}) {
    const [,] = useReducer(cartReducer, {
        items: [],
    })
    return <CartContext>
        {children}
    </CartContext>
}

export default CartContext;