import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const resizeImage = (url, size) => url.replace('w500', size)

const ShowItem = ({ show, onClick }) => {
  const image = show.images.banner

  return (
    <Link
      to={`/show/${show.slug}`}
      className="show-item__link"
      onClick={() => onClick(show)}
    >
      <div className="show-item">
        <picture className="show-item__image">
          <source srcSet={resizeImage(image, 'w150')} media="(max-width: 768px)" />
          <img srcSet={resizeImage(image, 'w300')} alt={show.title} />
        </picture>

        <span className="show-item__title">
          {show.title}
        </span>
      </div>
    </Link>
  )
}

ShowItem.propTypes = {
  show: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ShowItem
