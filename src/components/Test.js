import React from 'react'

class Test extends React.Component {
  constructor() {
      super()
      this.state = {
        repos: [],
      }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/wzamites/repos")
    .then(response => response.json())
    .then(data => {
      this.setState({
        repos: data
      })
    })
  }

  render() {
    return (
      <div>
      {this.state.repos.map(repos => <li>{repos.name}</li>)}
      </div>
    )
  }
}

export default Test
