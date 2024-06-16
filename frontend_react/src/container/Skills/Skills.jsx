import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReactToolTip from 'react-tooltip';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';


const Skills = () => {
const [experience, setExperience] = useState([]);
const [skills, setSkills] = useState([]);
  useEffect(() =>{
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query)
    .then((data) => {
      data.sort((y1, y2) => (y1.year < y2.year) ? 1 : (y1.year > y2.year) ? -1 : 0);
      setExperience(data);
    })

    client.fetch(skillsQuery)
    .then((data) => {
      // console.log(data);
      data.sort((p1, p2) => (parseInt(p1.Priority) > parseInt(p2.Priority)) ? 1 : (parseInt(p1.Priority) < parseInt(p2.Priority)) ? -1 : 0);
      // console.log(data);
      setSkills(data);
    })
  },[])
  return (
    <>
      <h2 className="head-text ">
        Skills & Experience
      </h2>

      <div className="app__skill-container">
        <motion.div className="app__skills-list">
          {skills.map((skills)=>(
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__skills-item app__flex"
            key={skills.name}
            >

            <div className="app__flex" style={{backgroundColor:skills.bgColor}}>
              <img src={urlFor(skills.icon)} alt={skills.name} />
            </div>

            <p className="p-text">{skills.name}</p>
            
            </motion.div>
          ))}
        </motion.div>


        <motion.div className="app__skills-exp">
            {experience.map((experience)=>(
              

              <motion.div
              className="app__skills-exp-item"
              key={experience.year}
              >
              <div className="app__skills-exp-year">
                <p className="bold-text">
                {experience.year}
                </p>
              </div>

              <motion.div className="app__skills-exp-works">
              {experience.works.map((work) =>(
              <>
                  <motion.div
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:0.5}}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                  >
                  <div className='app__flex'>
                  <div className='app__experienceImagediv' >
                  <img src={urlFor(work.icon)} alt={work.name} className='app__experienceImage' />
                  </div>
                  <div className='app__experienceDetails'>
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                  </div>
                  </div>
                  </motion.div>
                  
                  <ReactToolTip
                    id={work.name}
                    effect='solid'
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.desc}
                </ReactToolTip>
              </>
              ))}
              <hr/>
              </motion.div>
              
              </motion.div>

              ))}
              

            
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills,'app__skills') ,'skills',
  "app__whitebg"
  );