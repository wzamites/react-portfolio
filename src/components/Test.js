import React from 'react'
import socials from '../assets/socials'

class Test extends React.Component {
  constructor() {
      super()
      this.state = {
        repos: [],
      }
  }

  componentDidMount() {
    const uri = "https://api.github.com/users/" + socials.github + "/repos"
    let h = new Headers()
    let req = new Request(uri, {
      method: 'GET',
      headers: h,
      mode: 'cors',

    })

    fetch(req)
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data
      })
    })
  }

  render() {

    //Create this constant which is dupicating ProjectCard over an array
    const githubCards = this.state.repos.map(
      function(hub) {
        return (
          <li>{hub.name}</li>
        )
      }
    )

    //Returning the ProjectCards from the previous function
    return (
      <div>
        <div className="containerLayout">
          <ul>{githubCards}</ul>
        </div>
      </div>
    )
  }
}

export default Test
