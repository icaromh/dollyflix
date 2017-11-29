/* eslint:  */
import React from 'react'
import videojs from 'video.js'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

import {
  EVENT_CATEGORY_VIDEO,
  VIDEO_READY,
  VIDEO_PLAY,
  VIDEO_PAUSE,
  REMAIN_TIME_TO_SHOW_NEXT_EPISODE,
} from '../../constants'


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showNext: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.episodeId !== this.props.episodeId) {
      this.player.src(nextProps.options.sources)
      this.player.poster(nextProps.options.poster)
      this.player.loop(true)
      this.player.play()
      this.setState({showNext: false})
    }
  }

  componentDidMount() {
    this.setupPlayerJs()
  }

  // destroy player on unmount
  componentWillUnmount() {
    this.removePlayerJs()
  }

  setupPlayerJs = () => {
    const component = this
    const options = {
      autoplay: false,
      controls: true,
      ...this.props.options,
    }

    this.player = videojs(this.videoNode, options, function onPlayerReady() {
      const player = this

      player.volume(component.props.volume)

      ReactGA.event({ category: EVENT_CATEGORY_VIDEO, action: VIDEO_READY })
      player.on('play', () => ReactGA.event({ category: EVENT_CATEGORY_VIDEO, action: VIDEO_PLAY }))
      player.on('pause', () => ReactGA.event({ category: EVENT_CATEGORY_VIDEO, action: VIDEO_PAUSE }))
      player.on('volumechange', () => component.props.onVolumeChange(player.volume()))

      player.setInterval(() => {
        const remain = player.remainingTime() // in seconds
        if (remain <= REMAIN_TIME_TO_SHOW_NEXT_EPISODE) {
          component.setState({ showNext: true })
        }
      }, 1500)
    })
  }

  removePlayerJs = () => {
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

        {this.state.showNext && this.props.children}
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  options: PropTypes.object.isRequired,
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func.isRequired,
  children: PropTypes.any,
}

VideoPlayer.defaultProps = {
  volume: 0.5,
  children: () => {},
}


export default VideoPlayer
