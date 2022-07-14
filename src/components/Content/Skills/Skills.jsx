import React from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

// import Bar from './Bar';
import './skills.css'


const Skills = () => {

//     const data_bar = [
//     {
//         name: 'HTML/CSS/JavaScript',
//         level :'90%'
//     },
//     {
//         name: 'REACTJS',
//         level: '90%'
//     },
//     {
//         name: 'Python - Django/ Django Rest Framework',
//         level: '90%'
//     },
//     {
//         name: 'Docker',
//         level: '90%'
//     },
//     {
//         name: 'English',
//         level: 'C1'
//     }
// ]

  return (
    <section className='skills'>
        <div className='title'>
            <h2 className='section-title'>Skills</h2>
        </div>
        
        <div className='content'>
            <Router>
                <div className='column col-left'>
                    <h2 className='content-title'>My skills and experience.</h2>
                    <p>La formacion en el ambito de desarrollo de software comienza para Jesus Raul
                        en el mmomento en que entro a estudiar su ingenieria en Sistemas Automotrices al 
                        Instituto Politenico Nacional, teniendo como primer lenguaje aprendido, C/C++, dandole bases 
                        bastannte fuertes para aprender posteriormente, Python y sus respectivos modulos y frameworks. Y posteriormente,
                        aprender lenguajes de marcado como HTML5, CSS3, JavaScript
                    </p>
                    <Link className = 'btn' to = 'projects'>Look my projects</Link>
                </div>
            </Router>
       
        <div className="column col-right reveal">
            <div className="bar">
            <div className="bar">
            <div className="info">
              <span>HTML/CSS/JAVASCRIPT</span>
              <span>95%</span>
            </div>
            <div className="line html"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>REACTJS</span>
              <span>95%</span>
            </div>
            <div className="line reactjs"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>PYTHON DJANGO/DJANGO REST FRAMEWORK</span>
              <span>80%</span>
            </div>
            <div className="line django"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>MACHINE LEARNING PYTHON</span>
              <span>30%</span>
            </div>
            <div className="line machinelearning"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>DOCKER</span>
              <span>90%</span>
            </div>
            <div className="line docker"></div>
          </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skills