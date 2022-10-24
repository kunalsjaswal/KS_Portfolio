import React, {  useState } from 'react'
import {  ProjectDiv } from '../styles/ProjectStyle'
import humcare from '../images/PROJECTS/humcare.png'
import brainiac from '../images/PROJECTS/brainiac.png'
import cozycuisine from '../images/PROJECTS/couzycousine.png' 
import EKart from '../images/PROJECTS/E-Kart.png'
import rest2 from '../images/PROJECTS/restaurant2.png'
import foodhub from '../images/PROJECTS/foodhub.png'
import hope from '../images/PROJECTS/hope.png'


import humcareText from '../images/PROJECTS/humcareText.png'
import brainiacText from '../images/PROJECTS/brainiacText.png'
import cozyText from '../images/PROJECTS/cozyCuisineText.png'
import ekartText from '../images/PROJECTS/ekartText.png'
import rest2Text from '../images/PROJECTS/restaurant2text.png'
import foodhubText from '../images/PROJECTS/foodhubtxt.png'
import hopeText from '../images/PROJECTS/hopetxt.png'

import mouse from '../images/mouse.png'
import clickMouse from '../images/clickMouse.png'



const Projects = () => {

  const arr=[clickMouse,humcare,rest2,brainiac,cozycuisine,EKart,foodhub,hope];
  const arr2=[clickMouse,humcareText,rest2Text,brainiacText,cozyText,ekartText,foodhubText,hopeText];
  const [counter, setCounter] = useState(0);

  const onClickHandler=()=>{
    if(counter===(arr.length-1)){
      setCounter(1);
    }else{
      setCounter(counter+1);
    }
  }

    return (
    <ProjectDiv>
    <div className='project-info'>
        <div data-aos="flip-left" data-aos-duration="1200" style={{border:"3px solid black"}}>
          Projects : 12
        </div>
        <div data-aos="flip-up" data-aos-duration="1200" style={{border:"3px solid gray",background:"white",color:"black"}}>
          Clients : 5
        </div> 
        <div data-aos="flip-right" data-aos-duration="1200"  style={{border:"3px solid black"}}>
          In Progress : 2
        </div>
    </div>
    
    <div className="main">
        <h1>Projects Completed 
            <br />
            <span>creating client based requirement projects</span>
        </h1>
        <div className="temp-pages">
         <img src={arr[counter]} alt="template site" data-aos="fade"/>

         <div className="key-mouse">
            <img src={arr2[counter]} className="tablet" alt="tablet" />
            <img src={mouse} onClick={onClickHandler} className="m-img" alt="mouse" />
         </div> 
        </div>
      </div>
    </ProjectDiv>
  )
}
export default Projects