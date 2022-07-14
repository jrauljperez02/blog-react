import './App.css';
import React,{Suspense,lazy} from 'react';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Galery from './components/Content/Galery/Galery';
import Footer from './components/Footer/Footer';

const AboutMe = lazy(() => import('./components/Content/AboutMe/AboutMe'))
const Skills = lazy(() => import('./components/Content/Skills/Skills'))

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <AboutMe/>
          <Suspense fallback = {<h1>Loading</h1>}>
            <Skills/>
            <Galery/>
          </Suspense>
        </Route>
        <Route exact path='/contact/'><UserForm/></Route>
      </Switch>

      <Footer/>
    </Router>
    
  );
}

export default App;
