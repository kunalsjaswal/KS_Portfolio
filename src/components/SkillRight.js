import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const SkillRight = () => {
  return (
    <>
        <div className="genre">Front-End Web Development</div>
        <div className="outer-bar"><div id='f'  style={{width:"70%"}}>HTML5</div><span>80%</span></div>
        <div className="outer-bar"><div id='f' style={{width:"70%"}}>CSS3 (Bootstrap)</div><span>70%</span></div>
        <div className="outer-bar"><div id='f'  style={{width:"45%"}}>React</div><span>45%</span></div>

        <div className="genre">Back-End Web Development</div>
        <div className="outer-bar"><div id='b' style={{width:"50%"}}>PHP</div><span>50%</span></div>
        <div className="outer-bar"><div id='b' style={{width:"40%"}}>Node js</div><span>40%</span></div>
        <div className="outer-bar b"><div id='b' style={{width:"60%"}}>Mongo DB</div><span>60%</span></div>
        <div className="outer-bar"><div id='b' style={{width:"70%"}}>MY SQL</div><span>70%</span></div>

        <div className="genre">Languages</div>
        <div className="outer-bar l"><div id='l' style={{width:"60%"}}>JavaScript</div><span>60%</span></div>
        <div className="outer-bar"><div id='l' style={{width:"70%"}}>C/C++</div><span>70%</span></div>
        <div className="outer-bar"><div id='l' style={{width:"40%"}}>Python</div><span>40%</span></div>
        <div className="outer-bar"><div id='l' style={{width:"60%"}}>Java</div><span>60%</span></div>

        <div className="genre">Softwares</div>
        <div className="outer-bar s"><div id='s' style={{width:"50%"}}>Adobe Photoshop</div><span>50%</span></div>

    </>
  )
}

export default SkillRight