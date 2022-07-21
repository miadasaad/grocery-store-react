import React, { Component } from 'react'
import logo from "../images/logo.png"
import { Nav, Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './mynav.css'
import { connect } from 'react-redux'
import { FaCartPlus } from 'react-icons/fa'
import { RiHeartAddFill } from 'react-icons/ri'

class MyNavbar extends React.Component {
  state = {
    className1: "",
    className2: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 100) {
      if (!this.state.className1) {
        this.setState({ className1: "blue", className2: 'big' });
      }
    } else {
      if (this.state.className1) {
        this.setState({ className1: "", className2: '' });
      }
    }

  }

  render() {

    return (
      <Container>
        <Navbar className={'nav ' + this.state.className2 + " " + this.state.className1} fixed="top" expand="lg">
          <Container className={this.state.className1}>
            <Navbar.Brand href="#home"><img src={logo} className="d-inline-block align-top"
              alt="React Bootstrap logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <NavLink activeClassName='is-active' to="/">Home</NavLink>
                <NavLink activeClassName='is-active' to="/products">Products</NavLink>
                <NavLink activeClassName='is-active' to="/about">About Us</NavLink>
                <NavLink activeClassName='is-active' to="/contact">Contact</NavLink>
                <NavLink activeClassName='is-active' to="/login">Acount</NavLink>
              </Nav>
              <div className='nav-icons ms-auto'>
                <NavLink activeClassName='is-active' to="/cart"><FaCartPlus></FaCartPlus></NavLink>
                <NavLink activeClassName='is-active' to="/wishlist"><RiHeartAddFill></RiHeartAddFill></NavLink>
              </div>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </Container>

    )
  }
}
function mapStateToProps({ cart }) {
  return {
    cart: cart.cart[0]
  }
}
export default connect(mapStateToProps)(MyNavbar);

