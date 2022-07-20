import React from 'react'
import CardBlog from './CardBlog'
import cards from './cards_blog.json'
import './blog.css'

const Blog = () => {
  return (
    <div className='section'>
      <div className = 'title'>
        <h2 className = 'section-title'>{cards.title}</h2>
      </div>
       

      <div className='content-blog'>
        {cards.posts.map((item) => {
              return(
                  <CardBlog key = {item.id} props = {item}/>
              )
          })}
      </div>
        
    </div>
  )
}

export default Blog