import almonds from '../images/almonds.jpg'
import apple from '../images/apple.png'
import bananas from '../images/bananas.jpg'
import broccoli from '../images/broccoli.png'
import coriander from '../images/coriander.png'
import grains from '../images/grains.jpg'
import honey from '../images/honey.jpg'
import onion from '../images/onion.jpg'
import orange from '../images/orange.png'
import peach from '../images/peach.png'
import potato from '../images/potato.png'
import tomato from '../images/tomato.jpg'
import wheat from '../images/wheat.png'
import strawberry from '../images/fresh-strawberry-solated-white-background-69146635.jpg'
import lemon from '../images/lemon-isolated-24834437.jpg'
import pomegranate from '../images/juicy-pomegranate-its-half-leaves-16537522.jpg'



export let products = [
    {
        id: 0,
        name: 'Lemon',
        price: '9.00',
        count: 1,
        url: lemon,
        description: "",
    },
    {
        id: 1,
        name: 'Apple',
        price: '9.00',
        count: 1,
        url: apple,
        description: "",
    },
    {
        id: 2,
        name: 'Banana',
        price: '9.00',
        count: 1,
        url: bananas,
        description: "",
    },
    {
        id: 3,
        name: 'Strawberry',
        price: '9.00',
        count: 1,
        url: strawberry,
        description: "",
    },
    {
        id: 4,
        name: 'Coriander',
        price: '9.00',
        count: 1,
        url: coriander,
        description: "",
    },
    {
        id: 5,
        name: 'Grains',
        price: '9.00',
        count: 1,
        url: grains,
        description: "",
    },
    {
        id: 6,
        name: 'Honey',
        price: '9.00',
        count: 1,
        url: honey,
        description: "",
    },
    {
        id: 7,
        name: 'Onion',
        price: '9.00',
        count: 1,
        url: onion,
        description: "",
    },
    {
        id: 8,
        name: 'Orange',
        price: '9.00',
        count: 1,
        url: orange,
        description: "",
    },
    {
        id: 9,
        name: 'Peach',
        price: '9.00',
        count: 1,
        url: peach,
        description: "",
    },
    {
        id: 10,
        name: 'Potato',
        price: '9.00',
        count: 1,
        url: potato,
        description: "",
    },
    {
        id: 11,
        name: 'Tomato',
        price: '9.00',
        count: 1,
        url: tomato,
        description: "",
    },
    {
        id: 12,
        name: 'Wheat',
        price: '9.00',
        count: 1,
        url: wheat,
        description: "",
    },

]

let cart = {};
let wishlist = {};

//
export function getProducts() {
    return new Promise((res, rej) => {
        // setTimeout(() =>
        res(products)
        //, 500)
    })
}
// save product in cart
export function saveProduct(product) {
    return new Promise((res, rej) => {
        // setTimeout(() => {
        cart = {
            ...cart,
            product
        }
        res({ ...cart })
        // }, 1000)
    })
}

// save product in wishlist
export function saveWislist(product) {
    return new Promise((res, rej) => {
        // setTimeout(() => {
        wishlist = {
            ...wishlist,
            product
        }
        res({ ...wishlist })
        // }, 1000)
    })
}
