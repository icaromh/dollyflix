import React from 'react'
import PropTypes from 'prop-types'

import EpisodeBox from './EpisodeBox'

const EpisodesList = ({ episodes, show, onClick }) => {
  if (!episodes) return false

  const orderedEpisodes = episodes.sort((a, b) => (a.number > b.number))

  return (
    <div className="episodes-list">
      {orderedEpisodes.map(ep => (
        <EpisodeBox key={ep.id} episode={ep} show={show} onClick={onClick} />
      ))}
    </div>
  )
}

EpisodesList.propTypes = {
  episodes: PropTypes.array.isRequired,
  show: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default EpisodesList
