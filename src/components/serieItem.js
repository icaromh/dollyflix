import React from 'react';

export default function (props){
  const itemStyle = {
    backgroundImage: `url(${props.serie.images.banner})`,
  };

  return(
    <div
      key={props.serie.slug}
      className="thumbnail serielist__item"
      style={itemStyle}>

      <span className="serielist__item__meta">
        {props.serie.title}
      </span>
    </div>
  )
}
