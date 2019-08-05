import React from 'react'
import ProjectCard from '../components/ProjectCard'
import socials from '../assets/socials'

class CardSection extends React.Component {
  constructor() {
      super()
      this.state = {
        repos: [],
      }
  }

  // get your github username from the socials.js asset and make api call
  componentDidMount() {
    fetch("https://api.github.com/users/"+ socials.github + "/repos")
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
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          lang={hub.language}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage}
          opensource={hub.fork}
          languages_url={hub.languages_url} />
        )
      }
    )

    //Returning the ProjectCards from the previous function
    return (
      <div>
        <div className="containerLayout">
          {githubCards}
        </div>
      </div>
    )
  }
}

export default CardSection
