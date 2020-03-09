import React, { Component } from 'react'
import PropTypes from 'prop-types'

const handlePlayerReady = event => {
  console.log(event.target)
  event.target.mute()
  event.target.playVideo()
}

class Video extends Component {
  player = null

  componentDidMount() {
    if (window && window.YT) {
      this.setUpPlayer()
    }
  }

  setUpPlayer() {
    this.player = new window.YT.Player('player', {
      height: window.innerHeight,
      width: window.innerWidth,
      videoId: this.props.videoId,
      controls: false,
      loop: true,
      events: {
        onReady: handlePlayerReady,
      },
    })
  }

  render() {
    return <div id="player" />
  }
}

Video.defaultProps = {
  videoId: 'hCk9kpDkn9Q',
}

Video.propTypes = {
  videoId: PropTypes.string,
}

export default Video
