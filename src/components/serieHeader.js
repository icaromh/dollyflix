import React from 'react';

export default (props) => {
  if(!props.serie.title)
    return false;

  return (
    <div className="show-featured">
      <div className="show-featured__data">
        <h1 className="show-featured__title">{props.serie.title}</h1>
        <div className="show-feature__metadata">
          <span className="show-feature__metadata__item">{props.serie.year}</span>
          <span className="show-feature__metadata__item">{props.serie.network}</span>
          <span className="show-feature__metadata__item">{props.serie.num_seasons} Seasons</span>
        </div>
        <div className="show-featured__synopsis">
          <p>{props.serie.synopsis}</p>
        </div>
      </div>
      <div className="show-featured__image">
        <picture>
          <img srcSet={props.serie.images.fanart} alt={props.serie.title} />
        </picture>
      </div>
    </div>
  )
}
