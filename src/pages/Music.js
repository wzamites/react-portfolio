import React from 'react';

class Music extends React.Component {
  render() {
    return(
      <div>
        <div className="text-center">
          <iframe
          title="UpperMerion" 
          width="80%"
          height="394"
          src="https://musescore.com/user/32345141/scores/5676062/embed"
          frameborder="0" allowfullscreen allow="autoplay; fullscreen">
          </iframe>
        </div>
      </div>
    )
  }
}

export default Music;
