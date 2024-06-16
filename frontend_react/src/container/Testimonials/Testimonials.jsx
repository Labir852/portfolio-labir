import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonials.scss';
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick=(index)=>{
    setCurrentIndex(index);
  }


  useEffect(() =>{
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';
    client.fetch(query)
    .then((data) => {
      setTestimonials(data);
    })
    .catch((err) => {
      console.log(err);
    })

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    })
  },[])



const test = testimonials[currentIndex];



  return (
    <>
      {testimonials.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <img src={urlFor(test.imgurl)} alt="testimonial" />
              <div className="app__testimonial-content">
                <p className="p-text">
                  {test.feedback}
                </p>
                <div>
                    <h4 className="bold-text">
                    {test.name}
                    </h4>
                    <h5 className="p-text">
                    {test.company}
                    </h5>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={()=>handleClick(currentIndex===0?testimonials.length-1 : currentIndex-1)}>
              <HiChevronLeft/>
            </div>

            <div className="app__flex" onClick={()=>handleClick(currentIndex===testimonials.length-1 ? 0: currentIndex+1)}>
              <HiChevronRight/>
            </div>
            </div>
          </>

      )}
        
      <div className="app__testimonials-brands app__flex">

      {
        brands.map((brand)=>(
          <motion.div
          whileInView ={{opacity:[0,1]}}
          transition = {{duration:0.5,type:"tween"}} 
          key = {brand._id}
          >
          <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          {/* <h4 style={{textAlign:"center",color:"#313bac"}}>{brand.name}</h4> */}
          </motion.div>
        
       ))}
</div>



    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials,'app__testimonial') ,'testimonials',
  "app__primarybg"
  );