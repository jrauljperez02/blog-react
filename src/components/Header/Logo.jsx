import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";



const Logo = () => {
  return (
    <Router>
    <LogoContent>
        <Link to = ''>
          <img src= {'https://icon-library.com/images/dev-icon/dev-icon-6.jpg'} alt = '' />
        </Link>
    </LogoContent>
    </Router>
  )
}

export default Logo

const LogoContent = styled.div`
    .hide-title{
        display: none;
    }
    justify-self: center;
    a{
        display: block;
        margin: 10px auto;
        img{
            width: auto;
            height: 50px;
        }
    }
`