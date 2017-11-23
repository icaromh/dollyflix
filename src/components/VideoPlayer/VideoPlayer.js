/* eslint:  */
import React from 'react'
import videojs from 'video.js'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

class VideoPlayer extends React.Component {
  componentDidMount() {
    const options = {
      autoplay: false,
      controls: true,
      ...this.props.options,
    }

    this.player = videojs(this.videoNode, options, () => {
      ReactGA.event({ category: 'Video', action: 'Video Ready' })
    })
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
      this.videoPlayer = undefined
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video
          ref={(el) => { this.videoNode = el }}
          className="video-js"
        >
          <track kind="captions" />
        </video>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  options: PropTypes.object.isRequired,
}

export default VideoPlayer
