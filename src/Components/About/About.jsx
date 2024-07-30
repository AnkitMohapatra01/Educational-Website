import React from 'react'
import './About.css'
import about_img from '../Assets/about.png'
import play_icon from '../Assets/play-icon.png'
export default function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark On a transform educational journey with our university's comprehensive education programs. Our cutting-edge univerity;s comprehensive education programs.</p>
        <p>With a focus on innovation , hand-on learning , and personalized mentorship, our programs prepare aspiring educators to make meaningful impact.</p>
        <p>Wether you aspire to become a teacher, administrator , counselor , or educational leader .</p>
      </div>
    </div>
  )
}
