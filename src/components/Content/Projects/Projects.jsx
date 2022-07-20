import React from 'react'
import data from './projects.json'
import './projects.css'


const Projects = () => {
  return (
    <section className='projects'>
        <div className='title'>
            <h3 className='section-title'>{data.title}</h3>
        </div>
        <div className=''>
            {data.projects.map((item) => {
                return(
                    <div key={item.id} className = 'projects'>
                        <iframe 
                        className='projects__element' 
                        src = {item['site-url']} />
                        <h2>{item['project-name']}</h2>
                        <p>{item.description}</p>
                    </div>
                   
                )
            })}
        </div>
    </section>
  )
}

export default Projects