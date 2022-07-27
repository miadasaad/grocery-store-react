import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { RiHeartAddFill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { products } from '../Data/data';
import { connect } from 'react-redux';
import { saveProductToCart, saveProductToWishlist } from '../Action/Shared';
import './products.css'
class SomeProducts extends Component {
    state = {
        show: false
    }

    handleProduct(product) {
        this.props.dispatch(saveProductToCart(product))
    }
    handleProductWishlist(product) {
        this.props.dispatch(saveProductToWishlist(product))
    }
    render() {
        let myproducts = products.slice(0, 8)
        console.log(products);
        return (<div class="service-area" id="pricing" >
            < Container >
                <div class="section-title text-center animated wow zoomIn" data-wow-duration=".5s"
                    data-wow-delay=".5s">
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
                                <Col sm={6} md={4} lg={3} key={product.id}>
                                    <div class="service-wrap text-center">
                                        <img src={product.url} alt='product' class="hate" />
                                        <h3>{product.name}</h3>
                                        <span>${product.price}</span>
                                        <Row>
                                            <Col sm={7}><div><button className='view'> <Link to={`/products/${product.id}`}>View more</Link></button></div></Col>
                                            <Col> <button className='icon' onClick={() => {
                                                this.handleProduct(product)
                                            }}><FaCartPlus></FaCartPlus></button>
                                                <button onClick={() => {
                                                    this.handleProductWishlist(product)
                                                }} className='icon' ><RiHeartAddFill></RiHeartAddFill></button>
                                            </Col>
                                        </Row>


                                    </div>

                                </Col>
                            )
                        })}

                    </Row>
                    <button class="m-auto"><Link to='/products'>View All Products</Link></button>
                </div>
            </Container>
        </div>
        )
    }

}
// onClick={() => this.setState({ show: !this.state.show })} 

function mapStateToProps({ products }) {
    return {
        products: products.products.products
    }
}


export default connect(mapStateToProps)(SomeProducts)
//export default SomeProducts