import React from 'react'
import { ForFunDiv } from '../styles/ProjectStyle'
import a1 from '../images/templates/a1.png'
import a2 from '../images/templates/a2.png'
import a3 from '../images/templates/a3.png'
import a4 from '../images/templates/a4.png'
import s1 from '../images/templates/s1.png'
import s2 from '../images/templates/s2.png'
import s3 from '../images/templates/s3.png'
import s4 from '../images/templates/s4.png'
import s5 from '../images/templates/s5.png'

const ForFun = () => {

    const arr=[a1,a2,a3,a4,s1,s2,s3,s4,s5];

  return (
    <ForFunDiv>
        <h1>Template Websites - For Fun 
            <br />
            <span>Free time work</span>
        </h1>
        <div className="temp-pages">
            
            {arr.map((val,ind)=><img src={val} alt="template site" key={ind} className={`temp-imgs-${ind}`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay={100*ind}/>)}

        </div>
    </ForFunDiv>
  )
}

export default ForFun