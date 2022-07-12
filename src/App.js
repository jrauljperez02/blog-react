import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import {
  BrowserRouter as Router,
  Switch,
  Route, 

} from 'react-router-dom'
import AboutMe from './components/Content/AboutMe/AboutMe';
import Skills from './components/Content/Skills/Skills';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
            <AboutMe/>
            <Skills/>
        </Route>
        <Route exact path='/contact/'><UserForm/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
