import React from 'react';
import Header from './components/Header/Header';
import ContactPage from './components/ContactPage/ContactPage';
import Galery from './components/Content/Galery/Galery';
import Footer from './components/Footer/Footer';
import AboutMe from './components/Content/AboutMe/AboutMe';
import Skills from './components/Content/Skills/Skills';

import Blog from './components/Content/Blog/Blog';

function App() {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Galery/>
      <Blog/>
      <ContactPage/>
      <Footer/>
    </>
  );
}
export default App;
