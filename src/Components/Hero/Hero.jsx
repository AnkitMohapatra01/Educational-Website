import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education</h1>
        <p>Our Cutting-edge Curriculum is designed to empower students with the knowledge , skills and experience.</p>
        <button className='btn'>Explore More <FaArrowRight /></button>
      </div>
    </div>
  )
}
