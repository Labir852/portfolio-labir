import React, { useState } from 'react';
import { client } from '../../client';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
import resume from '../../assets/Tanvir\'s Resume.pdf'
import Swal from 'sweetalert2';
const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isSentMessage,setIsSentMessage] = useState("");


  const {name, email, message} = formData;
  const isDisabled = formData.name!=="" && formData.email!=="" && formData.message!=="";

  const handleChangeInput = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData,[name]:value});
  }
  
   const handleSubmit = async ()=> {
    // Pulling out the payload from the body
    if(!isDisabled)
    {
      Swal.fire({
        icon: 'warning',
        title: `Please fill the values in the form then submit!`,
        showConfirmButton: true,
        // timer: 3000
      })
    }
    else
    {
      setLoading(true);
      const contact = {
        _type:"contact",
        name:name,
        email:email,
        message:message,
        Date: new Date().toLocaleString(),
      }
  
       await client.create(contact)
      .then( () =>{
        setLoading(false);
        setIsFormSubmitted(true);
        Swal.fire({
          icon: 'success',
          title: `Successfully sent message!`,
          showConfirmButton: true,
          // timer: 3000
        })
        setIsSentMessage("Thank you for getting in touch.");
      })
      .catch((err) => 
        {
          console.log(err);
          setIsSentMessage("An error occured while sending message. Try Reloading the Page to send message.");
          setLoading(false);
        }
    
      )
    }
    
  }


  return (
    <>
        <h2 className="head-text">Take a Coffee <img src={images.coffee} alt = "swe"style={{height:"40px",width:"40px"}}/> & Chat with me <img src={images.chat} alt = "swe"style={{height:"40px",width:"40px"}}/> </h2>

        <div className="app__footer-cards">
            <div className="app__footer-card">
                <img src={images.email} alt="email" />
                <a href="mailto:tanvir.labir@gmail.com" className="p-text">tanvir.labir@gmail.com</a>
            </div>

            <div className="app__footer-card">
                <img src={images.resumeIcons} alt="resume" />
                <a href={resume} target="_blank"  className="p-text" rel="noreferrer">My Resume</a>

            </div>

            <div className="app__footer-card">
                <img src={images.mobile} alt="mobile" />
                <a href="tel:+8801842724386" className="p-text">+8801842724386</a>
            </div>
            
        </div>

        {
          !isFormSubmitted
          
          ?

          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input type="text" placeholder='Your Name' value={name} name="name" onChange={handleChangeInput} className="p-text" />
            </div>
            <div className="app__flex">
              <input type="email" placeholder='Your Email' value={email} name="email" onChange={handleChangeInput} className="p-text" />
            </div>

          <div>
            <textarea 
                name="message" 
                placeholder="Your Message" className="p-text"
                value={message}
                onChange={handleChangeInput}
            />
          </div>

          <button type="button" onClick={handleSubmit}  className="p-text">{loading ?  'Sending' : 'Send Message'}</button>
        </div>
        

        :
        
        <div>
          <h3 className="head-text">
          {isSentMessage}
          </h3>
        </div>
        }
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer') ,'contact',
  "app__whitebg"
  );