import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import logo from './logo.json'

const Logo = () => {
  return (
    <Router>
    <LogoContent>
        <Link to = ''>
          <img src= {logo['url']} alt = '' />
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