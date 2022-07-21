import React from 'react'
import { connect } from 'react-redux';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai'
import { Container, Col, Row } from 'react-bootstrap'
import './cart.css'
import { deleteProductFromCart, increaseCounting, decreaseCounting } from '../Action/Shared';
import { motion } from 'framer-motion'
import Sliding from '../Sliding/Sliding';

function Cart(props) {
  function deleteHandler(id) {
    props.dispatch(deleteProductFromCart(id))
    console.log("fjhfuy");
  }
  function increseCounter(id) {
    props.dispatch(increaseCounting(id))
  }
  function decreaseCounter(id) {
    props.dispatch(decreaseCounting(id))
  }
  return (
    <motion.div enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='content' style={{ color: 'black' }}>
      <Sliding />
      <Container>
        <h3 className='heading text-center'>Your shopping cart</h3>
      </Container>
      {props.cart.length ? props.cart.map((item, index) => {
        return (
          <Container key={index}>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className='align-items-center'>
                <div className='cart-item cart-place'>
                  <div>
                    <img src={item.product.url} alt='' />
                  </div>
                  <div>
                    <span>{item.product.name}</span>
                  </div>
                  <div>
                    <button onClick={() => { decreaseCounter(item.product.id) }} ><AiFillMinusCircle></AiFillMinusCircle></button> {item.product.count}<button onClick={() => { increseCounter(item.product.id) }}><AiFillPlusCircle></AiFillPlusCircle></button>
                  </div>
                  <div>
                    <span>${item.product.price * item.product.count}</span>
                  </div>
                  <button onClick={() => { deleteHandler(item.product.id) }} className='close '><AiFillCloseCircle></AiFillCloseCircle></button>
                </div>
              </Col>



            </Row>

          </Container>
        )
      }) : <p>your cart is empty</p>}

    </motion.div>
  )
}

function mapStateToProps({ cart }) {

  return {
    cart: cart.cart
  }
}
export default connect(mapStateToProps)(Cart)