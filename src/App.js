import React from 'react'
import NavBar from './components/NavBar'
import Contents from './components/Contents'
import Footer from './components/Footer'
import MyHeader from './components/MyHeader'
import ApiCalls from './components/ApiCalls'
// import Test from './components/Test'
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
        <div>
        <ApiCalls />
        <NavBar />
        <MyHeader />
        <Contents />
        <Footer />
        </div>
    )
  }
}

export default App
