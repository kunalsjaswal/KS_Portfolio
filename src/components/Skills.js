import React from 'react'
import { SkillDiv } from '../styles/SkillsStyle'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SkillLeft from './SkillLeft';
import SkillRight from './SkillRight';
import finalArrow from '../images/finalArrow.png'
AOS.init();

const Skills = () => {
  return (
    <SkillDiv>
        <div data-aos="fade-up" data-aos-duration="1500" className="heading">
            <h1>My Skills</h1>
            <div className="desc">I like to craft Beautiful and Scalable Web Products</div>
        </div>
        <div className="main-skills">

            <div className="aside-left" data-aos="fade" data-aos-duration="2000">
                <SkillLeft/>
            </div>

            <div className="aside-right" data-aos="fade" data-aos-duration="2000">
                <SkillRight/>
            </div>

            <div className="moveup" data-aos="fade-up" data-aos-anchor=".aside-left" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
             <img src={finalArrow} alt="go up" />
            </div>
        </div>
        
    </SkillDiv>
  )
}

export default Skills