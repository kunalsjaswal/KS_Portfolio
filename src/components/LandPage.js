import React from 'react'
import photo from '../images/photo2.png'
import resume from '../images/Resume_Kunal.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { LandPageDiv } from '../styles/landPageStyle'
AOS.init();

const LandPage = () => {


  return (
    <LandPageDiv>
        <p data-aos="fade" data-aos-duration="2000">
            <h1>Hello, I am Kunal Singh Jaswal</h1>
            <span>from Himachal and a Student of Computer Science having a good knowledge of Web Development that is both Front and backend (FullStack developer). I am also good at languages like C++ ,python. For more just Explore the site or have my</span>
            <a href={resume} target="_blank" className="download">Resume</a>
        </p>
        <img src={photo} alt="my photo" data-aos="flip-left" data-aos-duration="2000"/>
        
    </LandPageDiv>
  )
}

export default LandPage