import React from 'react'
import './aboutme.css'

const AboutMe = () => {
  return (
    <section className='about'>
        <div className = 'title reveal'>
            <h2 className = 'section-title'>About me</h2>
        </div>
        <div className='content'>
            <div className='column col-left reveal'>
                <div className='img-card'>
                    <img alt = '' src = 'https://jrauljperez.netlify.app/images/img1.jpg' />
                </div>
            </div>
            <div className='col-right reveal'>
                <div class="animated-text">
                    <h3>Python Backend Engineer</h3>
                    <h3>ReactJS Developer.</h3>
                    <h3>Automotive Engineer.</h3>
                </div>
                <p class="paragraph-text">Jesús Raúl Jiménez Pérez es un estudiante de 
                    la Escuela Superior de Ingenieria Mecánica y Electrica, ESIME Zacatenco 
                    del Instituto Politenico Nacional, en la carrera de Ingenieria en 
                    Sistemas Automotrices. Se desempeña fuertemente en el ámbito de la programación 
                    usando tecnologias como Pyhon, HTML/CSS/JAVASCRIPT, C/C++ y llevar acabo un control 
                    de versiones con Git. En este blog se presentan algunos proyectos que se han 
                    desarrollado utilizando estas tecnologias. Jesus Raul es una persona que le gusta 
                    trabajar en equipo, aprender y enseñar a los demas los conocimientos que él tiene y 
                    busca siempre seguir aprendiendo, tiene hobbies como lo es ir a correr o tocar la 
                    guitarra, pasar tiempo con su familia o salir a caminar. Tiene interés en continuar 
                    estudiando su ingenieria en el IPN, y de seguir aprendiendo nuevas tecnologias como 
                    lo puede ser ReactJS o NodeJS.</p>
                <p class="languaje">Nivel de inglés: C1.</p>

            </div>
        </div>
    </section>
  )
}

export default AboutMe