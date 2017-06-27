import React from 'react';

export default function (props){
  const itemStyle = {
    backgroundImage: `url(${props.serie.images.banner})`,
  };

  return(
    <div
      key={props.serie.imdb_id}
      className="thumbnail serielist__item"
      style={itemStyle}>

      <span className="serielist__item__meta">
        <a
          target="_blank"
          href={`http://www.imdb.com/title/${props.serie.imdb_id}/`}>
          {props.serie.title}
        </a>
      </span>
    </div>
  )
}
