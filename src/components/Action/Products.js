export const Get_Products = 'Get_Products';

export function get_products(products){
    return {
        type: Get_Products,
        products
    }
}
