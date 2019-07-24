import React from 'react'

import ProjectCard from '../components/ProjectCard'
import jokesData from  '../assets/jokesData'

function Dev() {
  const jokeComponents = jokesData.map(
    function(joke) {
      return <ProjectCard desc={joke.description} name={joke.name} url={joke.html_url} homepage={joke.homepage} />
    }
  )

  return (
    <div>
      <h1>This is my development stuff</h1>
      {jokeComponents}
    </div>
  );
}

export default Dev;
