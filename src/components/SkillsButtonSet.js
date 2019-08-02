import React from 'react'

import SkillButton from '../Buttons/SkillButton'
import skillsList from '../assets/skillsList'

import StarButton from '../Buttons/StarButton'

class SkillsButtonSet extends React.Component {

  //skills lives in state, which is the array of skills from skillsList.js
  constructor() {
    super()
    this.state = {
      skills: skillsList,
    }
  }

  //Set two states: button clicked and button unclicked boostrap styling
  render() {

    //Creates skillsLists, an array of of SkillsButton elements
    const skillsLists = this.state.skills.map(
      function(hub) {
        return (
          <SkillButton key= {hub.id} skill={hub.name} variant="outline-primary"/>        )
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
