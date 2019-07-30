import React from 'react'
import Button from 'react-bootstrap/Button'

import SkillButton from '../components/SkillButton'
import skillsList from '../assets/skillsList'

import StarButton from '../components/StarButton'

class SkillsButtonSet extends React.Component {

  //skills lives in state, which is the array of skills from skillsList.js
  constructor() {
    super()
    this.state = {
      skills: skillsList
    }
  }

  //Set two states: button clicked and button unclicked boostrap styling
  render() {

    //Creates skillsLists, an array of of SkillsButton elements
    const skillsLists = this.state.skills.map(
      function(hub) {
        return (
          <SkillButton skill={hub.name} variant="outline-primary"/>        )
      }
    )

    return (
      <div className="containerLayout">

        <StarButton /> &nbsp;
        {skillsLists}

      </div>
    )
  }
}

export default SkillsButtonSet
