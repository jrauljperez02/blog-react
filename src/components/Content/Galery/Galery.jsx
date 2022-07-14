import React from 'react'
import './galery.css'

const Galery = () => {

  const images_array = [
    {url:'https://miro.medium.com/max/1400/1*VJvm1cEIqEwFtQACLoEgkw.png'},
    {url:'https://miro.medium.com/max/700/1*kR89JbQQK9aAkNVyxE63pg.png'},
    {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'},
    {url:'http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png'},
    {url:'https://www.kindpng.com/picc/m/452-4529814_docker-and-kubernetes-logos-docker-logo-white-png.png'},
    {url:'https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9def01e2051965071409.png'},
    {url:'https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png'}
]

  return (
    <section className='work'>
        <div className='title'>
            <h2 className='section-title'>Handled Technologies</h2>
        </div>
        <div className='content'>
          {images_array.map((item,id) =>{
            return(
              <div class="card ">
                <div class="card-img">
                  <img src={item.url} alt=""/>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default Galery