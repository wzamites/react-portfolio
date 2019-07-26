import React from 'react'

import ProjectCard from '../components/ProjectCard'
import jokesData from  '../assets/jokesData'

class CardSection extends React.Component {
  render() {
    const jokeComponents = jokesData.map(
      function(joke) {
        return (
          <ProjectCard key={joke.id} desc={joke.description} name={joke.name} url={joke.html_url} homepage={joke.homepage} />
        )
      }
    )

    return (
          <div>
            {jokeComponents}
          </div>
    )
  }
}

export default CardSection
