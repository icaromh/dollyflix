import React from 'react'
import PropTypes from 'prop-types'

const ActionButton = ({ show, handleOnClick, icon }) => (
  <button
    onClick={() => handleOnClick(show)}
    className="show-featured__actions__button"
  >
    <span className="show-featured__actions__button__icon">{icon}</span>
    Favorito
  </button>
)

const ShowHeader = ({
  show,
  onFavoriteClick,
  isFavoritedShow,
  onUnfavoriteClick,
}) => {
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

        <div className="show-featured__actions">
          { isFavoritedShow ?
            <ActionButton show={show} handleOnClick={onUnfavoriteClick} icon="✓" />
            : <ActionButton show={show} handleOnClick={onFavoriteClick} icon="+" /> }
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
  onFavoriteClick: PropTypes.func.isRequired,
  onUnfavoriteClick: PropTypes.func.isRequired,
  isFavoritedShow: PropTypes.bool.isRequired,
}

export default ShowHeader
