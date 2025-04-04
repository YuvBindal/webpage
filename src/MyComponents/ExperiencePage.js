import React from 'react';
import './styles/ExperiencePage.css';
import BackgroundAnimation from './BackgroundAnimation';
import Navbar from './Navbar';
import './styles/Main.css';

const ExperiencePage = () => {
  
  return (
    <div className="background">
      <BackgroundAnimation />
      <Navbar />
      
      <div className="page-content">
        <div className="header-container">
          <h1 className="hire-me-header">If you want to hire me!</h1>
        </div>
      
        <div className="resume-container">
          <div className="resume-header">
            <h1 className="resume-name">YUV BINDAL</h1>
            <div className="resume-contact">
              <span>+65-9370-4607</span>
              <span>|</span>
              <span>yuv.bindal@u.nus.edu</span>
              <span>|</span>
              <a href="https://linkedin.com/in/yuvbindal" target="_blank" rel="noopener noreferrer">linkedin.com/in/yuvbindal</a>
              <span>|</span>
              <a href="https://github.com/YuvBindal" target="_blank" rel="noopener noreferrer">github.com/YuvBindal</a>
              <span>|</span>
              <a href="https://yuvbindal.com" target="_blank" rel="noopener noreferrer">yuvbindal.com</a>
            </div>
          </div>
          
          <section className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>National University of Singapore</h3>
                <span className="resume-location">Singapore</span>
              </div>
              <div className="resume-item-subheader">
                <p>Bachelors in Computing and Electrical Engineering (Honours), with a Minor in Mathematics</p>
                <span className="resume-date">Aug. 2022 – May 2026</span>
              </div>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Work Experience</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Software Engineer Intern</h3>
                  <span className="resume-company">Brighthive - Series A staged AI Startup</span>
                </div>
                <span className="resume-location">Chicago, USA</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">Jan. 2025 - Present</span>
              </div>
              <ul className="resume-item-details">
                <li>Deployed data retrieval agentic tools to production by developing a ETL pipeline from AWS Redshift creating a visualisation component for the platform driving an increase in annual contract value by <strong>$1.1M USD</strong> in <strong>2</strong> months</li>
                <li>Optimized platform architecture and implemented a LRU cache for retrieved datasets in agentic agent workflows, reducing latency and improving operational efficiency by <strong>20%</strong>, enabling faster task execution</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Quantitative Developer Intern</h3>
                  <span className="resume-company">Synergy Link Capital - Quantitative Trading Firm</span>
                </div>
                <span className="resume-location">Singapore</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">Aug. 2024 – Dec. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Developed load & store pipelines using multi-threading to efficiently handle high-frequency data streams with Python, Websockets, Asyncio, & PostgreSQL, with &lt;<strong>15</strong> ms latency ensuring <strong>100%</strong> accuracy in stored data</li>
                <li>Integrated a logging framework for enhanced monitoring & debugging services, and applied batching to achieve optimization in system performance helping decrease downtime by <strong>3x</strong></li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <h3>Quantitative Researcher Intern</h3>
                  <span className="resume-company">Rhicon Currency Management - Quantitative Trading Firm</span>
                </div>
                <span className="resume-location">Singapore</span>
              </div>
              <div className="resume-item-subheader">
                <span className="resume-date">May 2024 – Aug. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Engineered a vectorized and multi-threaded backtesting framework using OOP principles across multiple assets and instruments to increase runtime speed by <strong>200%</strong></li>
                <li>Developed a trading portfolio with <strong>3</strong> breakout & reversion strategies using advanced statistical techniques for trading futures in <strong>5</strong> FX pairs & <strong>2</strong> metals outperforming traditional ETFs by <strong>12%</strong></li>
              </ul>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <h3>Languages:</h3>
                <p>Python, Javascript, Typescript, C/C++</p>
              </div>
              <div className="skill-item">
                <h3>Frameworks:</h3>
                <p>React, Next, Node.js, Flask, FastAPI, CSS</p>
              </div>
              <div className="skill-item">
                <h3>Data Science Libraries:</h3>
                <p>Pandas, SciPy/NumPy, Matplotlib, Scikit-learn, Tensorflow, OCR, OpenCV</p>
              </div>
              <div className="skill-item">
                <h3>Online Courses:</h3>
                <p>Deep Learning Specialisation, Stanford CS229: Machine Learning, Coursera: Applied Econometrics</p>
              </div>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Competitions</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Solana Track Winner, HackNYU 2025 | Python, GraphQL, React.js, FastAPI</h3>
                <span className="resume-date">Feb. 2025</span>
              </div>
              <ul className="resume-item-details">
                <li>Used GraphQL to fetch data across multiple APIs predicting real-time network congestion on Solana via XGBoost offering a cost effective solution for traders to mitigate high gas fees</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Finalist, Citadel APAC Datathon 2024 | Pandas, Numpy, Matplotlib</h3>
                <span className="resume-date">Feb. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Preprocessed & Engineered features through hypothesis testing, building a CatBoost Regressor to forecast company sales with hyperparameter tuning using K-folds</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>1st Runner Up, NUS Fintech Summit | Xrpl-py, FastAPI, Firebase, Scikit-learn, React, Next</h3>
                <span className="resume-date">Jan. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Applied Vector Autoregression (VAR) to analyze bidirectional causality and feedback mechanisms among F&B stocks, U.S. obesity rates, soda consumption, crude oil prices, and other socio-economic factors.</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>1st Place, NUS Datathon | Pandas, CatBoost, Tensorflow</h3>
                <span className="resume-date">Feb. 2024</span>
              </div>
              <ul className="resume-item-details">
                <li>Secured funding by Ripple for deploying a smart-contract based microfinancing application to manage blockchain loan payments and used predictive modeling to classify user loan eligibilites.</li>
              </ul>
            </div>
          </section>
          
          <section className="resume-section">
            <h2>Projects</h2>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Medical Sensors Dashboard | Javascript, Next/React.js, Python</h3>
                <span className="resume-date">Nov. 2024 – Jan. 2025</span>
              </div>
              <ul className="resume-item-details">
                <li>Designed and implemented a multi-threaded Web Workers pool using JavaScript to optimize data processing, reducing processing time by <strong>50%</strong>, and enabling real-time analysis of concurrent high-frequency data streams</li>
              </ul>
            </div>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <h3>Full-Stack Women's Safety Mobile App | Flutter, Firebase, Python, Flask, Tensorflow</h3>
                <span className="resume-date">May 2023 – Aug. 2023</span>
              </div>
              <ul className="resume-item-details">
                <li>Developed a full-stack app using Flutter and Flask with REST APIs, integrating TensorFlow's ResNet object detection model to classify dangerous objects with <strong>90%</strong> accuracy, aimed at enhancing women's safety</li>
              </ul>
            </div>
          </section>
        </div>
        
        
      </div>
    </div>
  );
};

export default ExperiencePage; 