import { ADD_PRODUCT_TO_WISHLIST, DELETE_PRODUCT_FROM_WISHLIST } from "../Action/WishList";

export default function wishlist(state = { wishlist: [] }, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_WISHLIST:

            return {
                ...state,
                wishlist: [...state.wishlist, action.product]
            }
        case DELETE_PRODUCT_FROM_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist.filter((item) => {
                    return item.product.id !== action.id
                })]
            }
        default:
            return state
    }
}