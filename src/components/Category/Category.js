import React, { Component } from 'react'
import './category.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/swiper.min.css";
import orange from '../images/orange.png'
import apple from '../images/apple.png'
import broccoli from '../images/broccoli.png'
import peach from '../images/peach.png'
import wheat from '../images/wheat.png'
import coriander from '../images/coriander.png'
import potato from '../images/potato.png'
export default class Category extends Component {
    render() {
        let infoCategory = [
            {
                imgSrc: orange,
                name: 'orange'
            },
            {
                imgSrc: apple,
                name: 'apple'
            },
            {
                imgSrc: broccoli,
                name: 'brpccoli'
            },
            {
                imgSrc: peach,
                name: 'peach'
            },
            {
                imgSrc: wheat,
                name: 'wheat'
            },
            {
                imgSrc: coriander,
                name: 'coriander'
            },
            {
                imgSrc: potato,
                name: 'potato'
            }

        ]
        return (
            <div className="category text-center" id="menu">

                <Container>
                    <h1>category</h1>
                    <Swiper className='mySwiper' autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }} modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        spaceBetween={0}>
                        {infoCategory.map((item, index) => {
                            return (<SwiperSlide key={index}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src={item.imgSrc} />
                                    <Card.Body>
                                        <Card.Title className='text-center'>{item.name}</Card.Title>


                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </Container>

            </div>

        )
    }
}
