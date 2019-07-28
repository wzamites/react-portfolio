import React from 'react'

import ProjectCard from '../components/ProjectCard'
import githubData from  '../assets/githubData'

class CardSection extends React.Component {
  componentDidMount() {
  fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  
  render() {
    const githubComponents = githubData.map(
      function(hub) {
        return (
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          lang={hub.language}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage} />
        )
      }
    )

    return (
          <div className="containerLayout">
            {githubComponents}
          </div>
    )
  }
}

export default CardSection
