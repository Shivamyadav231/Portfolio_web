import React from 'react'
import ph from '../assets/ph.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <div id='4 ' className='hero'>
        <img src={ph} alt=''/>
        <h1>
        Hello! I'm Shivam Yadav, a developer with a strong interest in Web Development, Machine Learning,
        and modern tech stacks. I have hands-on experience with Python, Pandas, NumPy, Matplotlib, and React.
        I'm currently doing an internship where I am enhancing my skills in React, DevOps, and advanced
        Machine Learning.
        </h1>

        <p>
        Currently, I am doing an internship where I am learning React, DevOps, and advanced Machine Learning. 
        My goal is to become a strong developer, build impactful projects, and keep improving my skills every day.
        </p>

        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
