import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'

import { fetchShow, selectEpisode } from '../actions'

import ShowHeader from '../components/ShowHeader'
import EpisodesList from '../components/EpisodesList'
import SeasonSelector from '../components/SeasonSelector'

import {
  EVENT_CATEGORY_NAVIGATION,
  NAVIGATION_SEASON_CLICK,
  NAVIGATION_SEASON_SELECT_CLICK,
} from '../constants'

class ShowView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentShow: this.props.currentShow,
      seasons: [],
      seasonSelected: 1,
    }

    this.handleOnClickEpisode = this.handleOnClickEpisode.bind(this)
  }

  componentWillMount() {
    if (!this.props.currentShow) {
      this.props.fetchShow(this.props.params.slug)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentShow) {
      this.setState({ currentShow: nextProps.currentShow })
    }
  }


  handleOnClickEpisode(episode) {
    this.props.selectEpisode(episode)
  }

  handleSeasonClick = () => {
    ReactGA.event({ category: EVENT_CATEGORY_NAVIGATION, action: NAVIGATION_SEASON_SELECT_CLICK })
  }

  handleChangeSeason = (ev) => {
    ReactGA.event({ category: EVENT_CATEGORY_NAVIGATION, action: NAVIGATION_SEASON_CLICK })

    this.setState({
      seasonSelected: parseInt(ev.target.value, 10),
    })
  }

  render() {
    const show = this.state.currentShow
    const episodes = show.episodes && show.episodes.filter(ep => parseInt(ep.season, 10) === this.state.seasonSelected)

    if (!show) {
      return (
        <div className="container">
          <h1 className="page-title">
            Loading
          </h1>
        </div>
      )
    }

    return (
      <div>
        <Helmet title={`Dollyflix - assistir ${show.title}`}>
          <link rel="canonical" href={`https://dollyflix.herokuapp.com/serie/${show.slug}`} />
          <meta property="og:type" content="video.tv_show" />
          <meta property="og:title" content={show.title} />
          <meta property="og:url" content={`https://dollyflix.herokuapp.com/serie/${show.slug}`} />
          <meta property="og:image" content={show.images ? show.images.fanart : ''} />
        </Helmet>

        <ShowHeader show={show} />

        <div className="container container--padding">
          <SeasonSelector
            seasons={this.props.seasons}
            onChange={this.handleChangeSeason}
            onClick={this.handleSeasonClick}
          />

          <EpisodesList
            show={show}
            season={this.state.seasonSelected}
            episodes={episodes}
            onClick={this.handleOnClickEpisode}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ currentShow, seasons }) {
  return { currentShow, seasons }
}

ShowView.propTypes = {
  currentShow: PropTypes.object,
  params: PropTypes.object.isRequired,
  fetchShow: PropTypes.func.isRequired,
  selectEpisode: PropTypes.func.isRequired,
  seasons: PropTypes.array,
}

ShowView.defaultProps = {
  currentShow: {},
  seasons: [],
}

export default connect(mapStateToProps, {
  fetchShow,
  selectEpisode,
})(ShowView)
