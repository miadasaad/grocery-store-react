import React from 'react'
import blog3 from '../images/blog3.jpg'
import blog2 from '../images/blog2.jpg'
import blog1 from '../images/blog1.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import './blogs.css'

export default function Blogs() {
    let blogs = [
        {
            imgSrc: blog1
        },
        {
            imgSrc: blog2
        },
        {
            imgSrc: blog3
        },
    ]
    return (
        <div>

            <div className="latest-news-area" id="blog">
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <div className="section-title text-center animated wow zoomIn" data-wow-duration=".2s"
                                data-wow-delay=".2s">
                                <h2><b>RECENT BLOGS</b></h2>
                                <div className="sub-heading">
                                    You can ask the question regarding the issues we will
                                    solve that together for sure
                                </div>

                                <div className="astrodivider">
                                    <div className="astrodividermask"></div><span><i>&#10038;</i></span>
                                </div>


                            </div>
                        </div>
                    </Row>
                    <div className="news-active">
                        <Row>

                            {blogs.map((blog, index) => {
                                return (
                                    <Col md={6} lg={4} key={index}>
                                        <div className="latest-news-wrap">
                                            <div className="news-img">
                                                <img src={blog.imgSrc} className="img-responsive" />
                                                <div className="deat">
                                                    <span>31</span>
                                                    <span>Dec</span>
                                                </div>
                                            </div>
                                            <div className="news-content">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt alias incidunt consequatur illo quam ea? Ipsum fugiat deserunt quod tempora !</p>
                                                <a href="">Read more..</a>

                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>


                </Container>

            </div>



        </div>
    )
}
