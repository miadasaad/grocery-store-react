import React, { useEffect, useState } from 'react'
import '../App.css'
import MyNavbar from './MyNavbar/MyNavbar';
import AnimationMotion from './Animation/Animation';
import { BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import './spinner.css'

import Footer from './Footer/Footer';
import { initialData } from './Action/Shared';


function App(props) {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    props.dispatch(initialData())
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 100);
  }, [])


  return (

    <div>
      {loading ? <HashLoader className='hashLoader' color={'#7ACAA6'} loading={loading} size={100} /> :
        <BrowserRouter>

          <MyNavbar />

          <AnimationMotion />
          <Footer />

        </BrowserRouter>
      }

    </div>


  )
}



const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(App);

