import React from 'react';
import Header from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import Galery from './components/Content/Galery/Galery';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Content/AboutMe/AboutMe';
import Skills from './components/Content/Skills/Skills';

import Blog from './components/Content/Blog/Blog';
import Projects from './components/Content/Projects/Projects';

function App() {
  return (
    <>
      <Header/>
      <Skills/>
      <AboutMe/>
      <Galery/>
      <Blog/>
      <ContactPage/>
      <Projects/>
      <Footer/>
    </>
  );
}
export default App;
