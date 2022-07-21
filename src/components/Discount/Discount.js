import React from 'react'
import freshveg from '../images/fresh-veg.jpg';
import organic1 from '../images/organic1.jpg';
import organic2 from '../images/organic2.jpg';
import './discount.css'
import { Container,Row,Col } from 'react-bootstrap';

export default function () {
  return (
    

   <div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
            d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,245.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
    </svg>
    <section class="discount text-center">
        <Container>
            <p>Check Top</p>
            <h2>DISCOUNTS</h2>

            <Row>
                <Col >
                    <div class="fresh">
                        <img src={freshveg} />
                    </div>

                </Col>
                <Col>
                    <div class="organic">
                        <img src={organic1} />
                        <img src={organic2} class="nine" />

                    </div>

                </Col>
            </Row>
        </Container>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1"
            d="M0,192L80,165.3C160,139,320,85,480,53.3C640,21,800,11,960,37.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
        </path>
    </svg>
   </div>
   
           
  )
}
