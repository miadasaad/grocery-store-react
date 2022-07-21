export const ADD_PRODUCT_TO_CART= 'ADD_PRODUCT_TO_CART'
export const DELETE_PRODUCT_TO_CART= 'DELETE_PRODUCT_TO_CART'
export const INCREMENT_COUNT= 'INCREMENT_COUNT'
export const DECREMENT_COUNT= 'DECREMENT_COUNT'

export function add_product(product){
    return {
        type: ADD_PRODUCT_TO_CART,
        product
    }
}

export function delete_product(id){
    return {
        type: DELETE_PRODUCT_TO_CART,
        id
    }
}

export function increase_count(id){
    return {
        type: INCREMENT_COUNT,
        id
    }
}

export function decrease_count(id){
    return {
        type: DECREMENT_COUNT,
        id
    }
}