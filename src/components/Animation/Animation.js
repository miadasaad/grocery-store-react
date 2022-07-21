import React from 'react'
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import AboutUs from '../AboutUs/AboutUs';
import Login from '../Acount/Login';
import Wishlist from '../Wishlist/Wishlist';
import Contact from '../Contact/Contact';
import Error from '../Error/Error'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SignUp from '../Acount/Signup';

function AnimationMotion() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/products/:id' element={<SingleProduct />} />
                <Route exact path='/wishlist' element={<Wishlist />} />
                <Route exact path='/about' element={<AboutUs />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimationMotion