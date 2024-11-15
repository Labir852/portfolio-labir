import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.scss';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h4 className="logo"><a href="#">LABIR</a></h4>
        </div>
        <ul className='app__navbar-links'>
          {['home','skills','about','work','testimonials','contact'].map((item)=>(
            <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>
        {
          toggle && (
            <motion.div
            whileInView = {{x:[300,0]}}
            transition = {{duration:0.85,ease:'easeOut'}}
            >
            <h4 className="logo"><a href="#">LABIR</a></h4>
            <HiX onClick={()=>setToggle(false)} />
            
            <ul>
            {['home','about','work','skills','testimonials','contact'].map((item)=>(
              <li key={item}>
              <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
            </motion.div>
          )}
        </div>
    </nav>
  )
}

export default Navbar