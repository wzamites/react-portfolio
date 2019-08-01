import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import Home from '../pages/Home'
import Dev from '../pages/Dev'
import Music from '../pages/Music'

class Contents extends React.Component {
  render() {
    return (
      <Router>
          <Route path="/" exact render={() => ( <Home /> )}/>
          <Route path="/dev" exact render={() =>  ( <Dev /> ) }/>
          <Route path="/music" exact render={() => ( <Music /> )}/>
      </Router>
    )
  }
}

export default Contents
