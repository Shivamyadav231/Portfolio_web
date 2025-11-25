import React from 'react'
import './About.css'
import ph from '../assets/ph.jpg'

const About = () => {
  return (
    <div id='5 ' className='about'>

      <div className="about-title">
        <h1>About Me</h1>
        
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={ph} alt="" />
        </div>

        <div className="about-right">

          {/* About Paragraph */}
          <div className="about-para">
            <p>
              Currently, I am doing an internship where I am learning React, DevOps, and 
              advanced Machine Learning. My goal is to become a skilled developer and 
              contribute to impactful projects in the tech industry.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h1>Skills</h1>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Python</li>
              <li>Pandas, NumPy, Matplotlib, PyTorch</li>
              <li>Git & GitHub</li>
              <li>Machine Learning (Basics)</li>
              <li>Deep Learning (Basics)</li>
            </ul>
          </div>

          {/* Achievement / Projects Section */}
          <div className="about-achievement">
            <h1>Machine Learning Projects</h1>

            <h2>Spam Email Detection</h2>
            <p>
              Developed an NLP-based Machine Learning model to classify emails as spam or not spam. 
              Used text preprocessing, TF-IDF vectorization, and algorithms like Naive Bayes. 
              This project enhanced my understanding of text processing and classification.
            </p>

            <h2>House Price Prediction</h2>
            <p>
              Built a Machine Learning model using Linear Regression to predict house prices based 
              on features like area, rooms, and location. Performed data cleaning, feature engineering, 
              and model evaluation. This project improved my understanding of regression algorithms 
              and data preprocessing.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
