import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/contact/'><UserForm/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
