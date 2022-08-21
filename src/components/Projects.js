import React, { useEffect, useState } from 'react'
import { ProjectDiv } from '../styles/ProjectStyle'
import p1_Photo from '../images/vaccination.png';

const Projects = () => {


  const [checkP1, setCheckP1] = useState(false);
  const [checkP2, setCheckP2] = useState(false);
  const [checkP3, setCheckP3] = useState(false);
  const [checkP4, setCheckP4] = useState(false);


  useEffect(()=>{

  },[checkP1,checkP2,checkP3,checkP4]);

  const ExecuteP1=()=>{
    setCheckP1(true);
    setCheckP4(false);
    setCheckP2(false);
    setCheckP3(false);
  }

  const ExecuteP4=()=>{
    setCheckP1(false);
    setCheckP4(true);
    setCheckP2(false);
    setCheckP3(false);
  } 
  const ExecuteP2=()=>{
    setCheckP1(false);
    setCheckP4(false);
    setCheckP2(true);
    setCheckP3(false);
  } 
  const ExecuteP3=()=>{
    setCheckP1(false);
    setCheckP4(false);
    setCheckP2(false);
    setCheckP3(true);
  }


    return (
    <ProjectDiv checkP1>
        <h1>Projects <br /> Completed</h1> 
        <div className="upperLayer">
          <img src={p1_Photo} alt="404" style={{borderRadius: checkP1?"0%":"50%"}} onClick={ExecuteP1}/>
          <h3>E-Vaccination</h3>
        </div>

        <div className="upperLayer2">
          <img src={p1_Photo} alt="404" style={{borderRadius: checkP2?"0%":"50%"}} onClick={ExecuteP2}/>
          <h3>E-Vaccination</h3>
        </div>

        <div className="upperLayer3">
          <img src={p1_Photo} alt="404" style={{borderRadius: checkP3?"0%":"50%"}} onClick={ExecuteP3}/>
          <h3>E-Vaccination</h3>
        </div>

        <div className="upperLayer4">
          <img src={p1_Photo} alt="404" style={{borderRadius: checkP4?"0%":"50%"}} onClick={ExecuteP4}/>
          <h3>E-Vaccination</h3>
        </div>
    </ProjectDiv>
  )
}
export default Projects