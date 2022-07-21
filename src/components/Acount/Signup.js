import React from 'react'
import { motion } from 'framer-motion'
import Sliding from '../Sliding/Sliding'

export default function SignUp() {
    return (
        <motion.div enter={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Sliding />
            <div className="login">
                <div id="register">
                    <h3>Sign Up</h3>
                    <form >

                        <input type="text" placeholder='Name' name="username" />

                        <input type="text" name="emailid" placeholder='your email' />


                        <input type="text" placeholder='your mobile' name="mobileno" />


                        <input type="password" placeholder='password' name="password" />

                        <input type="submit" className="button" value="Register" />
                    </form>
                </div>
            </div>

        </motion.div>
    )
}