import React from 'react'

import CardSection from '../components/CardSection'
import SkillsButtonSet from '../components/SkillsButtonSet'

class Dev extends React.Component {
  render() {
    return (
      <div>
      <SkillsButtonSet />
      <SkillsButtonSet />
        <CardSection />
      </div>
    )
  }
}

export default Dev;
