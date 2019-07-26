import React from 'react'
import './styles/App.css';

import NavBar from './components/NavBar'
import Contents from './components/Contents'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
          <div>
            <NavBar />
            <Contents />
            <Footer />
          </div>
    )
  }
}

export default App;
