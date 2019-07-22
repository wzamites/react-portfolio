import React from 'react';
import NavBar from './NavBar';

import Music from './pages/Music';
import Dev from './pages/Dev';
import Home from './pages/Home';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <div>
    <NavBar />

    <Router>
      <Route path="/" exact render={
      () => {
        return ( <Home /> );
      }
     }/>

     <Route path="/music" exact render={
     () => {
       return ( <Music />  );
     }
    }/>

    <Route path="/dev" exact render={
    () => {
      return ( <Dev /> );
    }
   }/>
    </Router>
    </div>
  );
}

export default App;
