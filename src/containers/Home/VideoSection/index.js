import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Overlay, TextContainer, Title } from './style'

const handlePlayerReady = event => {
  event.target.mute()
  event.target.playVideo()
}

class VideoSection extends Component {
  player = null

  state = {
    showVideo: false,
  }

  constructor(props) {
    super(props)
    this.showVideo = this.showVideo.bind(this)
    this.hideVideo = this.hideVideo.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
  }

  componentDidMount() {
    if (window && window.YT && window.YT.Player) {
      // this.setUpPlayer()
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
        onStateChange: this.handleStateChange,
      },
    })
  }

  handleStateChange(event) {
    if (event.data === window.YT.PlayerState.PLAYING) {
      this.showVideo()
    } else {
      this.hideVideo()
    }
  }

  showVideo() {
    if (!this.state.showVideo) this.setState({ showVideo: true })
  }

  hideVideo() {
    if (this.state.showVideo) this.setState({ showVideo: false })
  }

  render() {
    const overlayStyle = {
      opacity: this.state.showVideo ? 0.75 : 1,
    }

    return (
      <Container>
        <Overlay style={overlayStyle} />
        <div id="player" />
        <TextContainer>
          <Title>
            Dream<span>.</span> Create<span>.</span> Inspire<span>.</span>
          </Title>
        </TextContainer>
      </Container>
    )
  }
}

VideoSection.defaultProps = {
  videoId: 'hCk9kpDkn9Q',
}

VideoSection.propTypes = {
  videoId: PropTypes.string,
}

export default VideoSection
