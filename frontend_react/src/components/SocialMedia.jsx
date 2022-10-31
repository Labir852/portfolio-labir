import React from 'react';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/loverazlabir" target="_blank" rel ="noreferrer"><BsTwitter /></a>
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