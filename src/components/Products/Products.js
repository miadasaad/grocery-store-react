import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Sliding from '../Sliding/Sliding'
import { FaCartPlus } from 'react-icons/fa';
import { RiHeartAddFill } from 'react-icons/ri'
import { saveProductToCart, saveProductToWishlist } from '../Action/Shared';


class Products extends Component {
  handleProduct(product) {
    this.props.dispatch(saveProductToCart(product))
  }
  handleProductWishlist(product) {
    this.props.dispatch(saveProductToWishlist(product))
  }
  render() {
    const { products } = this.props
    let myproducts = products[0]


    return (<motion.div enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} class="service-area" id="pricing" >
      <Sliding />
      < Container >
        <div class="section-title text-center">
          <p>Explore Our</p>
          <h2><b>MARKET</b></h2>
          {/* <!----divider-----> */}
          <div class="astrodivider">
            <div class="astrodividermask"></div><span><i>&#10038;</i></span>
          </div>
          {/* <!-----divider-----> */}
          <Row>
            {myproducts.map(product => {
              return (
                <Col xs={6} md={4} lg={3} key={product.id}>
                  <div class="service-wrap text-center">
                    <img src={product.url} class="hate" />
                    <h3>{product.name}</h3>
                    <span>${product.price}</span>
                    <Row>
                      <Col sm={7}><div><button className='view'> <Link to={`/products/${product.id}`}>View more</Link></button></div></Col>
                      <Col> <button className='icon' onClick={() => {
                        this.handleProduct(product)
                      }}><FaCartPlus></FaCartPlus></button>
                        <button className='icon' onClick={() => {
                          this.handleProductWishlist(product)
                        }}><RiHeartAddFill></RiHeartAddFill></button>
                      </Col>
                    </Row>

                  </div>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </motion.div>
    )
  }

}

function mapStateToProps({ products }) {
  return {
    products: products.products.products
  }
}


export default connect(mapStateToProps)(Products)