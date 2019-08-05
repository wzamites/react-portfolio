import React from 'react'
import socials from '../assets/socials'

class Footer extends React.Component {
  render() {

    const theUrl = "https:" + socials.domain
    return (
      <footer className="text-center py-3">
        © {new Date().getFullYear()} <a href={theUrl} > {socials.domain}</a>
      </footer>
    )
  }
}

export default Footer
