import React from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import Bar from './Bar';
import './skills.css'


const Skills = () => {

    const data_bar = [
    {
        name: 'HTML/CSS/JavaScript',
        level :'95%',
        styles: 'html'
    },
    {
        name: 'REACTJS',
        level: '90%',
        styles: 'reactjs'
    },
    {
        name: 'Python - Django/ Django Rest Framework',
        level: '90%',
        styles: 'django'

    },
    {
      name: 'Machine Learning Python',
      level: '30%',
      styles: 'machinelearning'

  },
    {
        name: 'Docker',
        level: '90%',
        styles: 'docker'
    },
    {
        name: 'English',
        level: 'C1',
        styles: 'english'
    }
]

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
            {data_bar.map((item,id)=> {
              return(
                <Bar key = {id} props = {item} />
              )
            })}
          </div>
        </div>
    </section>
  )
}

export default Skills