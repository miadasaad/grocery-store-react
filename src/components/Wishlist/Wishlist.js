import React from 'react'
import Sliding from '../Sliding/Sliding'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai'
import { deleteProductFromWishlist } from '../Action/Shared'

function Wishlist(props) {
  function deleteHandler(id) {
    props.dispatch(deleteProductFromWishlist(id))
  }
  return (
    <motion.div enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='content' style={{ color: 'black' }}>
      <Sliding />
      <Container>
        <h3 className='heading text-center'>Your Wishlist</h3>
      </Container>
      {props.wishlist.length ? props.wishlist.map((item, index) => {
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
                  <button onClick={() => { deleteHandler(item.product.id) }} className='close '><AiFillCloseCircle></AiFillCloseCircle></button>
                </div>
              </Col>



            </Row>

          </Container>
        )
      }) : <p>your wishlist is empty</p>}

    </motion.div>
  )
}

function mapStateToProps({ wishlist }) {

  return {
    wishlist: wishlist.wishlist
  }
}
export default connect(mapStateToProps)(Wishlist)