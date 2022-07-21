import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import potato from '../images/potato.png'
import coriander from '../images/coriander.png'
import peach from '../images/peach.png'
import './offers.css'

export class Offers extends Component {
  state = {
    offers: [
      {
        background: "rgb(249, 131, 21)",
        imgSrc: potato
      },
      {
        background: "rgb(44, 142, 229)",
        imgSrc: coriander
      }
      , {
        background: "rgb(124, 205, 171)",
        imgSrc: peach
      }
    ]
  }
  render() {
    return (
      <div className='offer text-center'>
        <Container>
          <h6>Check Our</h6>
          <h2>BEST OFFERS</h2>
          {/* <!----divider-----> */}
          <div class="astrodivider">
            <div class="astrodividermask"></div><span><i>&#10038;</i></span>
          </div>
          {/* <!-----divider-----> */}
          <Row>
            {this.state.offers.map((offer, index) => {
              return (
                <Col sm={6} md={4} key={index}>
                  <div class="offer1" style={{ background: offer.background }}>
                    <span>fresh</span>
                    <h2 class="sad">vegetables</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>consectetur adipisicing.</p>
                    <a href="">shop now</a>
                    <img src={offer.imgSrc} />
                  </div>
                </Col>

              )

            })}
          </Row>

        </Container>

      </div>
    )
  }
}

export default Offers