import { Get_Products } from "../Action/Products";

export default function products(state={products:[]},action) {
    switch (action.type) {
        case Get_Products:
            return {
                ...state,
                products: action.products
            }
           
    
        default:
            return state
           
    }
}