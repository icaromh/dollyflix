import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchShow, selectEpisode } from '../actions'
import ShowHeader from '../components/ShowHeader'
import EpisodesList from '../components/EpisodesList'
import SeasonSelector from '../components/SeasonSelector'

class SerieView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentShow: this.props.currentShow || {},
      seasons: [],
      seasonSelected: 1,
    }

    this.handleOnClickEpisode = this.handleOnClickEpisode.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentShow) {
      this.setState({ currentShow: nextProps.currentShow })
    }
  }

  componentWillMount() {
    if (!this.props.currentShow) {
      this.props.fetchShow(this.props.params.slug)
    }
  }

  handleOnClickEpisode(episode) {
    this.props.selectEpisode(episode)
  }

  handleChangeSeason = (ev) => {
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

export default connect(mapStateToProps, {
  fetchShow,
  selectEpisode,
})(SerieView)
