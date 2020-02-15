import React from 'react'
import Contents from './components/Contents'
import Footer from './components/Footer'
import MyHeader from './components/MyHeader'
import ApiCalls from './components/ApiCalls'
// import Test from './components/Test'
import './styles/App.css';

//test comment
class App extends React.Component {
  render() {
    return (
        <div>
        <ApiCalls />
        <MyHeader />
        <Contents />
        <Footer />
        </div>
    )
  }
}

export default App
