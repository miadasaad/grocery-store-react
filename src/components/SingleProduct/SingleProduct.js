import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import './singleProduct.css'
import { Container, Row, Col } from 'react-bootstrap'
import { saveProductToCart, saveProductToWishlist } from '../Action/Shared';

function SingleProduct(props) {
    const params = useParams();
    let currentProduct = props.products[parseInt(params.id)]
    console.log(params);
    function handleProduct(product) {
        props.dispatch(saveProductToCart(product))
    }
    function wishlistProduct(product) {
        props.dispatch(saveProductToWishlist(product))
    }

    console.log(props.wishlist);
    console.log("uyiutyut");
    return (
        <div class="cardProduct">
            <Container>
                <Row>
                    <Col md={5}>
                        <div class="photo">
                            <img src={currentProduct.url} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div class="description">
                            <h2>Fresh Food</h2>
                            <h4>{currentProduct.name}</h4>
                            <h1>${currentProduct.price}</h1>
                            <p>Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
                            <button onClick={() => { handleProduct(currentProduct) }}>Add to Cart</button>
                            <button onClick={() => { wishlistProduct(currentProduct) }}>Wishlist</button>
                        </div>
                    </Col>
                </Row>

            </Container>


        </div>
    )
}
function mapStateToProps({ products, wishlist }) {
    return {
        products: products.products.products[0],
        wishlist: wishlist.wishlist
    }
}

export default connect(mapStateToProps)(SingleProduct)