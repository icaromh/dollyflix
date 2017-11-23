import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const episodeStyle = episode => ({
  backgroundImage: `url(${episode.image})`,
})

const EpisodeBox = ({ episode, show, onClick }) => {
  const number = parseInt(episode.number, 10)
  const season = parseInt(episode.season, 10)
  const linkTo = `/show/${show.slug}/${season}/${number}`

  return (
    <div className="episode">
      <Link key={number} to={linkTo} onClick={() => onClick(episode)}>
        <div className="episode__bg" style={episodeStyle(episode)}>
          <div className="episode__number">
            {number}
          </div>
        </div>
        <div className="episode__meta">
          {episode.title}
        </div>
      </Link>
    </div>
  )
}

EpisodeBox.propTypes = {
  episode: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default EpisodeBox
