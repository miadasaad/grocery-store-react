import React, { Component } from 'react'
import Sliding from '../Sliding/Sliding';
import Discount from '../Discount/Discount';
import Blogs from '../Blogs/Blogs';
import Category from '../Category/Category';
import About from '../About/About';
import Offers from '../Offers/Offers';
import SomeProducts from '../SomeProducts/SomeProducts';
import { motion } from 'framer-motion';
export default class extends Component {
  render() {
    return (
      <motion.div
        enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
      >
        <Sliding />
        <Category />
        <About />
        <Offers />
        <SomeProducts />
        <Discount />
        <Blogs />
      </motion.div>
    )
  }
}
