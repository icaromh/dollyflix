import React from 'react';

export default function (props){
  const width = props.width || "auto";
  const height = props.height || "auto";

  return (
    <div className="media-wrapper">
      <iframe
        className="media-frame"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${props.trailer}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}
