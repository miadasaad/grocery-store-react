import React from 'react'
import img1 from '../images/img1.PNG'
import img2 from '../images/img2.PNG'
import img3 from '../images/img3.PNG'
import img4 from '../images/img4.png'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'

export default function () {
    return (

        <div className="footer" id="contact">
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={6} lg={3}>
                            <h3>Grocery</h3>
                            <hr className="foote"></hr>
                            <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse at
                                incidunt
                                necessitatibus laboriosam repellat veritatis distinctio totam. Perferendis quisquam
                                voluptatum.</p>
                        </Col>


                        <Col md={6} lg={3} className="col">
                            <h3>Navigation</h3>
                            <hr className="foote"></hr>
                            <h6> <a href="#home"><i className="fa fa-angle-right"></i> Home</a></h6>
                            <h6> <a href="#menu"><i className="fa fa-angle-right"></i> Menu</a></h6>
                            <h6> <a href="#shop"><i className="fa fa-angle-right"></i> Shop </a></h6>
                            <h6> <a href="#about"><i className="fa fa-angle-right"></i> About Us</a></h6>

                            <h6> <a href="#pricing"><i className="fa fa-angle-right"></i> Pricing</a></h6>
                            <h6> <a href="#blog"><i className="fa fa-angle-right"></i> Blog</a></h6>

                        </Col>

                        <Col md={6} lg={3} className="col">
                            <h3>Latest News</h3>
                            <hr className="foote"></hr>

                            <div className="img-footer ">
                                <img src={img1} />

                                <img src={img2} />
                            </div>

                            <div className="img-footer ">
                                <img src={img3} />

                                <img src={img4} className="disappear" />
                            </div>
                        </Col>

                        <Col md={6} lg={3} className="col">
                            <h3>Get In Touch</h3>
                            <hr className="foote"></hr>
                            <p>Street 238,52 tempor
                                Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
                            <p><strong>Phone:</strong>&nbsp;&nbsp;&nbsp;010 6754 5432</p>
                            <p >
                                <strong>mail:</strong>&nbsp;grocery@gmail.com
                            </p>
                            <p ><strong>Website:</strong>&nbsp;&nbsp;&nbsp;mayada.com</p>
                        </Col>

                    </Row>

                </Container>


                <Container>
                    <p className='text-center'>&copy; Copyright 2020 <span>by Mayada Saad</span> .All rights
                        reserved</p>
                </Container>
            </div>

        </div>
    )
}
