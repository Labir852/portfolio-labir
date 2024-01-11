import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF,FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
      
        <a href="https://github.com/labir852" target="_blank" rel ="noreferrer"><FaGithub /></a>
        </div>
        <div>

       <a href="https://www.facebook.com/tanvir.labir159" target="_blank" rel ="noreferrer"> <FaFacebookF/></a>
       </div>
       <div>

        <a href="https://www.instagram.com/labir159/" target="_blank" rel ="noreferrer"><BsInstagram/></a>
        </div>
        <div>

        <a href="https://www.linkedin.com/in/tanvir-anjum-l-54294513a/" target="_blank" rel ="noreferrer"><BsLinkedin/></a>
        </div>
    </div>
  )
}

export default SocialMedia