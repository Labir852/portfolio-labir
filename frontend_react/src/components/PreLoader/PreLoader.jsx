import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animation/index";
import './PreLoader.scss';
import { images } from "../../constants";


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader app__primarybg">
        
         
      <div className="texts-container">
        <span>Welcome! </span>
        <span>I am </span>
        <span> Tanvir Anjum Labir</span>
        <span>a Software Engineer <img src={images.swe} style={{height:"30px",width:"30px"}}/> </span>
        <span>a Researcher <img src={images.researcher1} style={{height:"30px",width:"30px"}}/></span>
        <span>an Instructor <img src={images.instructor} style={{height:"30px",width:"30px"}}/></span>
      </div>
    </div>
  );
};

export default PreLoader;