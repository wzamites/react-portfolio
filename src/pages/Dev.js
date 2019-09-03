import React from 'react'
import { connect } from 'react-redux'
import CardSection from '../components/CardSection'
import SkillsButtonSet from '../components/SkillsButtonSet'
import Card from 'react-bootstrap/Card'
import LangButton from '../Buttons/LangButton'

class Dev extends React.Component {
  render() {

    const selectedSkills = this.props.skillarray.map(
      function(count) {
        return (
          <LangButton key={count} lang={count} />
        )
      }
    )


    return (
      <div>
      <SkillsButtonSet />
      <Card>
        <Card.Body>
        <h2 className="center">Browse my GitHub repos</h2>
          <Card.Text className="center">
          {selectedSkills}
          </Card.Text>
          <CardSection />
        </Card.Body>
      </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    skillarray: state.skillarray
  }
}

export default connect(mapStateToProps)(Dev)
