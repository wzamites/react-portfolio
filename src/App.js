import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Music from './pages/Music';
import Dev from './pages/Dev';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div>
    <NavBar />

    <Router>
    <div className="container-fluid">
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

   </div>
    </Router>
    </div>
  );
}

export default App;
