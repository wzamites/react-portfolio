import React from 'react'

import ProjectCard from '../components/ProjectCard'
import githubData from  '../assets/githubData'

class CardSection extends React.Component {
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
          homepage={hub.homepage}
          opensource={hub.fork} />
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
