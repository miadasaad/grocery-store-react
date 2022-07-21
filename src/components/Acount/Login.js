import React from 'react'
import Sliding from '../Sliding/Sliding'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './account.css'

export default function Login() {
  return (
    <motion.div enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Sliding />
      <div className='login'>
        <h3>Log in</h3>
        <form>
          <input type='text' placeholder="please enter your e-mail" />
          <input type='password' placeholder='password' />
          <button className='btnn btn-primary' type='submit'>Submit</button>
        </form>
        <span>forget password?</span>
        <Link to='/signup'><span>have no account?</span> Sign Up</Link>
      </div>
    </motion.div>
  )
}
