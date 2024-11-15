import { motion } from 'framer-motion';
import React from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = 
{
  whileInView:
  {
    scale:[0,1],
    opacity:[0,1],
    transition:
    {
      duration:1,
      ease:'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
    <motion.div whileInView={{x:[-100,0],opacity:[0,1]}} transition={{duration:1.5}} className="app__header-info">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span><img src={images.hello} alt = "hello"style={{height:"100px",width:"100px"}}/></span>
          <div style={{marginLeft:20}}>
          <p className="p-text">Hello, I am</p>
          <h1 className="head-text">LABIR</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
        <p className="p-text">Software Engineer</p>
        <p className="p-text"> Web Developer </p>
        <p className="p-text">Researcher</p>
        <p className="p-text">IELTS Instructor</p>
        </div>
      </div>
    </motion.div>
      
    <motion.div whileInView={{opacity:[0,1]}} 
      transition={{duration:0.5, delayChildren:0.5}}
      className="app__header-img">
      

      <img src={images.photoprofile2} alt="profile-bg" />
      <motion.img whileInView={{scale:[0,1]}} 
      transition={{duration:1,ease:'easeInOut'}}
      className="overlay_circle" src={images.circle} 
      alt="profile-circle" />

    </motion.div>
    <motion.div 
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
          {[images.dotnet,images.react,images.SQL,].map((circle,index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} className='app__experienceImage' alt="circle" />
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');