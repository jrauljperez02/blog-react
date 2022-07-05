import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2>Hola! Yo soy<br/><span>JRaul</span></h2>
        <div className="animated-text">
          <h3>Ing. en Sistemas Automotrices</h3>
          <h3>Desarrollador Web.</h3>
          <h3>Programador con Python.</h3>
        </div>
        <a href="blog/blog.html" className="btn">Mira mi trabajo</a>
        <div className="media-icons">
          <a href="https://www.facebook.com/jrauljperez02"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/jrauljperez02/"><i class="fab fa-instagram"></i></a>
          <a href="https://twitter.com/jrauljperez02"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Home