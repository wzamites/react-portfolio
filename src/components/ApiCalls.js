import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadGithub } from '../redux/actions/load-github'
import socials from '../assets/socials'

class ApiCalls extends React.Component {
  componentDidMount() {

    //First call
    fetch("https://api.github.com/users/"+ socials.github + "/repos", {
        headers: {
            "Accept":"application/vnd.github.mercy-preview+json"
        },
    })
    .then(response => response.json())
    .then(data => {
      this.props.loadGithub(
        //set the state as repos sorted by created_at date
        data.sort(function(a,b) {
          if(b.created_at > a.created_at) {
            return 1
          } else{
            return -1
          }
        })
      )
    })
  }

  render() {
    return null
  }
}

function mapStateToProps(state) {
  return {
    repositories: state.repositories,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadGithub:loadGithub}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiCalls)
