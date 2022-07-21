import { getProducts, saveProduct, saveWislist } from "../Data/data";
import { add_product, decrease_count, delete_product, increase_count } from "./Cart";
import { get_products } from "./Products";
import { add_product_wishlist, delete_product_wishlist } from "./WishList";

export function initialData() {
  return (dispatch) => {
    return getInitialData().then((products) => {
      dispatch(get_products(products))
    })
  }
}

export function saveProductToCart(product) {
  return (dispatch) => {
    return saveProduct(product).then((product) => {
      dispatch(add_product(product))
    })
  }
}

export function saveProductToWishlist(product) {
  return (dispatch) => {
    return saveWislist(product).then((product) => {
      dispatch(add_product_wishlist(product))
    })
  }
}

// delete product from cart
export function deleteProductFromCart(id) {
  return (dispatch) => {
    dispatch(delete_product(id))
  }
}

// delete product from wishlist
export function deleteProductFromWishlist(id) {
  return (dispatch) => {
    dispatch(delete_product_wishlist(id))
  }
}
// increase count for item
export function increaseCounting(id) {
  return (dispatch) => {
    dispatch(increase_count(id))
  }
}

// decrease count for item 
export function decreaseCounting(id) {
  return (dispatch) => {
    dispatch(decrease_count(id))
  }
}


function getInitialData() {
  return Promise.all([getProducts()]).then((products) => ({
    products

  }
  ))

}