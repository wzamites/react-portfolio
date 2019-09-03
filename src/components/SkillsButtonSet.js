import React from 'react'
import SkillButton from '../Buttons/SkillButton'
import languageList from '../assets/languageList'
import Badge from 'react-bootstrap/Badge'

class SkillsButtonSet extends React.Component {

  //skills lives in state, which is the array of skills from skillsList.js
  constructor() {
    super()
    this.state = {
      languageList: languageList,
    }
  }

  render() {

    //Creates skillsLists, an array of of SkillsButton elements
    const skillsLists = this.state.languageList.map(
      function(hub) {
        return (
          <div key = {hub.id} className="languagePill">
            <SkillButton key={hub.id} skill={hub.name} variant="outline-primary"/>
          </div>
        )
      }
    )

    return (
        <div className="containerLayout">
          {skillsLists}
          </div>
    )
  }
}

export default SkillsButtonSet
