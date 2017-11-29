import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  REMAIN_TIME_TO_SHOW_NEXT_EPISODE,
} from '../../../constants'


class NextEpisode extends Component {

  constructor(props) {
    super(props)

    this.state = {
      countdown: REMAIN_TIME_TO_SHOW_NEXT_EPISODE,
    }
  }

  componentDidMount() {
    this.initCountDown()
  }

  componentWillUnmount() {
    clearInterval(this.countdownId)
  }

  initCountDown = () => {
    this.countdownId = setInterval(() => {
      if (this.state.countdown >= 1) {
        this.setState({ countdown: this.state.countdown - 1 })
      } else {
        this.props.onNextEspisodeClick(this.props.episode)
      }
    }, 1000)
  }

  render() {
    const { show, episode } = this.props

    return (
      <div className="playing_next">
        <div className="pn_poster">
          <img alt="Episode Poster" className="playing_next_poster" src={episode.image} />
        </div>
        <div className="pn_epinfo">
          <p className="playing_next_show">{show.title}</p>
          <p className="playing_next_episode">{episode.title}</p>
          <p className="playing_next_number">Season {episode.season}, Episode {episode.number}</p>
        </div>
        <div className="pn_counter">
          <p className="playing_next_countertext">O próximo episódio começa em</p>
          <p id="nextCountdown">{this.state.countdown}</p>
        </div>
        <div className="pn_btns">
          <button
            className="auto-next-btn"
            onClick={() => this.props.onNextEspisodeClick(episode)}
          >
            Reproduzir Agora
          </button>
        </div>
      </div>
    )
  }
}

NextEpisode.propTypes = {
  show: PropTypes.object.isRequired,
  episode: PropTypes.object.isRequired,
  onNextEspisodeClick: PropTypes.func.isRequired,
}

export default NextEpisode
