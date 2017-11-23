import React from 'react'
import PropTypes from 'prop-types'

const ShowHeader = ({ show }) => {
  if (!show.title) { return false }

  return (
    <div className="show-featured">
      <div className="show-featured__data">
        <h1 className="show-featured__title">{show.title}</h1>
        <div className="show-feature__metadata">
          <span className="show-feature__metadata__item">{show.year}</span>
          <span className="show-feature__metadata__item">{show.network}</span>
          <span className="show-feature__metadata__item">{show.num_seasons} Seasons</span>
        </div>
        <div className="show-featured__synopsis">
          <p>{show.synopsis}</p>
        </div>
      </div>
      <div className="show-featured__image">
        <picture>
          <img srcSet={show.images.fanart} alt={show.title} />
        </picture>
      </div>
    </div>
  )
}

ShowHeader.propTypes = {
  show: PropTypes.object.isRequired,
}

export default ShowHeader
