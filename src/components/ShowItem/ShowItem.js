import React from 'react'
import { Link } from 'react-router'

const resizeImage = (url, size) => url.replace('w500', size)

export default function ({ show, onClick }) {
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
