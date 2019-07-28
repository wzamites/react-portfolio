import React from 'react'

import CardSection from '../components/CardSection'
import SkillsButtons from '../components/SkillsButtons'
import DevHeader from '../components/DevHeader'

class Dev extends React.Component {
  render() {
    return (
      <div>
        <DevHeader />
        <SkillsButtons />
        <CardSection />
      </div>
    )
  }
}

export default Dev;
