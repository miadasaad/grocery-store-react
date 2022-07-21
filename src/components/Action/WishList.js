export const ADD_PRODUCT_TO_WISHLIST= 'ADD_PRODUCT_TO_WISHLIST'
export const DELETE_PRODUCT_FROM_WISHLIST= 'DELETE_PRODUCT_FROM_WISHLIST'


export function add_product_wishlist(product){
    return {
        type: ADD_PRODUCT_TO_WISHLIST,
        product
    }
}

export function delete_product_wishlist(id){
    return {
        type: DELETE_PRODUCT_FROM_WISHLIST,
        id
    }
}