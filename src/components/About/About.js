import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import './about.css'
import about from '../images/sec2-img.png'
import Wave from 'react-wavify'


export default function About() {
  return (
    <div className='about'>
        <Container>
            <Row>
                <Col>
                <div class="my-content2">
                        <h3>Welcome to</h3>
                        <h1>grocery</h1>
                        <div class="border-bottom"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas laboriosam praesentium
                            consequuntur delectus in expedita.
                            Dicta ducimus debitis vero perspiciatis quaerat, eaque officia voluptatum tenetur sint velit
                            dolorum fugit.</p>
                        <div class="phone text-center">
                            <span><i class="fa fa-phone"></i> call us if you have any problems</span>
                            <span> <strong>Phone: </strong>+34 7869 3456</span>
                            <span> <strong>Email: </strong>grocery563@gmail.com</span>
                        </div>

                    </div>
                </Col>
                <Col>
                <div class="my-content1">
                        <img src={about} />

                    </div>
                </Col>
            </Row>
        </Container>
        <Wave className='wave' fill='#EEEEEE'
        paused={false}
        options={{
          height: 15,
          amplitude: 30,
          speed: 0.25,
          points: 4
        }}
  />
    </div>
  )
}
