import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_TO_CART, INCREMENT_COUNT, DECREMENT_COUNT } from "../Action/Cart";

export default function cart(state = { cart: [] }, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product]
            }
        case DELETE_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart.filter((item) => {
                    return item.product.id !== action.id
                })]
            }
        case INCREMENT_COUNT:
            return {
                ...state,
                cart: [...state.cart.map(item => {
                    if (item.product.id === action.id) {
                        item.product.count++
                    }
                    return item
                })]
            }
        case DECREMENT_COUNT:
            const index = state.cart.findIndex(p => p.product.id === action.id);

            state.cart.forEach(item => {
                if (item.product.id === action.id) {
                    if (item.product.count === 1) {
                        state.cart.splice(index, 1)
                    }
                    else {
                        item.product.count--
                    }
                }

            })
            return {
                ...state,
                cart: [...state.cart]
            }

        default:
            return state
    }
}