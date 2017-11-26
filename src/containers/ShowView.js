import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

import { showFetchData, selectEpisode } from '../actions/show'

import ShowHeader from '../components/ShowHeader'
import EpisodesList from '../components/EpisodesList'
import SeasonSelector from '../components/SeasonSelector'
import Loader from '../components/Loader'

import {
  EVENT_CATEGORY_NAVIGATION,
  NAVIGATION_SEASON_CLICK,
  NAVIGATION_SEASON_SELECT_CLICK,
} from '../constants'

class ShowView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seasonSelected: this.props.params.season ? parseInt(this.props.params.season, 10) : 1,
    }
  }

  componentWillMount() {
    if (Object.keys(this.props.show).length === 0) {
      this.props.fetchShow(this.props.params.slug)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ show: nextProps.show })
    }
  }

  changePath = (season) => {
    const { slug } = this.props.params
    const location = Object.assign({}, browserHistory.getCurrentLocation())
    location.pathname = `/show/${slug}/${season}`
    browserHistory.push(location)
  }


  handleOnClickEpisode = episode => (
    this.props.selectEpisode(episode)
  )

  handleSeasonClick = () => {
    ReactGA.event({ category: EVENT_CATEGORY_NAVIGATION, action: NAVIGATION_SEASON_SELECT_CLICK })
  }

  handleChangeSeason = (ev) => {
    const season = parseInt(ev.target.value, 10)
    ReactGA.event({ category: EVENT_CATEGORY_NAVIGATION, action: NAVIGATION_SEASON_CLICK })

    this.changePath(season)
    this.setState({
      seasonSelected: season,
    })
  }

  renderContent = () => {
    const show = this.props.show
    const episodes = show.episodes && show.episodes.filter(ep => parseInt(ep.season, 10) === this.state.seasonSelected)

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
            value={this.state.seasonSelected}
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

  render() {
    const hasShow = Object.keys(this.props.show).length !== 0

    return (
      <Loader
        for={!this.props.showIsLoading && hasShow}
        render={this.renderContent}
      />
    )
  }
}

ShowView.propTypes = {
  show: PropTypes.object,
  params: PropTypes.object.isRequired,
  fetchShow: PropTypes.func.isRequired,
  selectEpisode: PropTypes.func.isRequired,
  seasons: PropTypes.array,
  showIsLoading: PropTypes.bool.isRequired,
}

ShowView.defaultProps = {
  show: {},
  seasons: [],
}

const mapStateToProps = state => ({
  showIsLoading: state.showIsLoading,
  show: state.currentItem,
  seasons: (() => {
    const sortCriteria = (a, b) => a - b
    const getSeasons = episodes => (
      episodes
        .map(ep => parseInt(ep.season, 10))
        .reduce((acc, el) => (acc.indexOf(el) === -1 ? acc.concat(el) : acc), [])
        .sort(sortCriteria)
    )
    return state.currentItem.episodes ? getSeasons(state.currentItem.episodes) : []
  })(),
})

const mapDispatchToProps = dispatch => ({
  fetchShow: slug => dispatch(showFetchData(slug)),
  selectEpisode: episode => dispatch(selectEpisode(episode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowView)
