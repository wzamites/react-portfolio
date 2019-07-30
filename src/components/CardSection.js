import React from 'react'

import ProjectCard from '../components/ProjectCard'
import githubData from  '../assets/githubData'

class CardSection extends React.Component {

  //githubData now lives in state as githubComponents
  constructor () {
    super()
    this.state = {
      githubComponents: githubData
    }
  }
  render() {

    //create githubCards which is an array of cards after looping
    const githubCards = this.state.githubComponents.map(
      function(hub) {
        return (
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          lang={hub.language}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage}
          opensource={hub.fork} />
        )
      }
    )

    //return the array of cards in a layout container
    return (
          <div className="containerLayout">
            {githubCards}
          </div>
    )
  }
}

export default CardSection
