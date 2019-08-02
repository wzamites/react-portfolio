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
  }


  render() {
    return (
      <div>
      Hi
      </div>
    )
  }
}

export default Test
