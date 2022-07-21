import React from 'react'
import Sliding from '../Sliding/Sliding'
import { motion } from 'framer-motion'
import { Row, Container, Col } from 'react-bootstrap'
import './contact.css'
export default function Contact() {
  return (
    <motion.div className='content' enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Sliding />
      <div className="mapping " style={{ margin: 'auto', width: '75%' }} >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722685346!2d2.2770198640288317!3d48.858837739136945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2seg!4v1629808058126!5m2!1sen!2seg"
          width="100%" height="300" style={{ border: '0', margin: '20px auto' }} allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div className="contact-info mb-5" style={{ display: "flex", width: "75%", margin: "auto", padding: "30px", marginTop: '20px' }}>
        <Container>
          <Row>
            <Col>
              <div className="form" style={{ width: "90%", marginRight: "50px" }}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Your name</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ibrahim ali" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Your email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Subject</label>
                  <textarea style={{ display: "block" }}></textarea>
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">Your message</label>
                  <textarea style={{ display: "block" }}></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
              </div>
            </Col>
            <Col>
              <div className="info-phone" style={{ width: "90%" }}>
                <h3>Contact Info</h3>
                <p>paris le tour du evel</p>
                <p>010 4537 8690</p>
                <p>miada687@gmail.com</p>
              </div>
            </Col>
          </Row>

        </Container>


      </div>
    </motion.div>
  )
}
