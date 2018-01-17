import React from 'react'
import PropTypes from 'prop-types'

import FavoriteIcon, { FavoritedIcon } from '../Icons'


const ShowHeader = ({
  show,
  onFavoriteClick,
  isFavoritedShow,
  onUnfavoriteClick,
}) => {
  if (!show.title) { return false }

  const favoriteButton = (
    <button
      onClick={() => onFavoriteClick(show)}
      className="show-featured__actions__button"
    >
      <FavoritedIcon color="#e50914" /> Adicionar aos Favoritos
    </button>
  )

  const unfavoriteButton = (
    <button
      onClick={() => onUnfavoriteClick(show)}
      className="show-featured__actions__button"
    >
      <FavoriteIcon color="#e50914" /> Remover dos Favoritos
    </button>
  )


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
          { isFavoritedShow ? unfavoriteButton : favoriteButton }
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
