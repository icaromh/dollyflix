import React from 'react';

export default (props) => {
  if(!props.serie.title)
    return false;

  return (
    <div className="serie-featured-wrapper">
      <div className="serie-data">
        <h1 className="serie-title">{props.serie.title}</h1>
        <div className="serie-metadata">
          <span className="serie-metadata-item">{props.serie.year}</span>
          <span className="serie-metadata-item">{props.serie.network}</span>
          <span className="serie-metadata-item">{props.serie.num_seasons} Seasons</span>
        </div>
        <div className="serie-synopsis">
          <p>{props.serie.synopsis}</p>
        </div>
      </div>
      <div className="serie-featured-player">
        <div className="serie-featured-bg" style={{backgroundImage: `url(${props.serie.images.fanart})`}}></div>
        {/* <div className="serie-featured-player-icon"></div> */}
      </div>
    </div>
  )
}
