import React from 'react'
import ProjectCard from '../components/ProjectCard'
import socials from '../assets/socials'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CardSection extends React.Component {
  // constructor() {
  //     super()
  //     this.state = {
  //       repos: [],
  //     }
  // }
  //
  // // get your github username from the socials.js asset and make api call
  // componentDidMount() {
  //   fetch("https://api.github.com/users/"+ socials.github + "/repos")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       //set the state as repos sorted by created_at date
  //       repos: data.sort(function(a,b) {
  //         if(b.created_at > a.created_at) {
  //           return 1
  //         } else{
  //           return -1
  //         }
  //       })
  //     })
  //   })
  // }


  render() {

    //Create this constant which is dupicating ProjectCard over an array
    const githubCards = this.props.repositories.map(
      function(hub) {
        return (
          <ProjectCard
          key={hub.id}
          desc={hub.description}
          name={hub.name}
          url={hub.html_url}
          homepage={hub.homepage}
          opensource={hub.fork}
          languages_url={hub.languages_url} />
        )
      }
    )

    //Returning the ProjectCards from the previous function
    return (
      <div>
        <div className="containerLayout">
          {githubCards}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories
  }
}

export default connect(mapStateToProps)(CardSection)
