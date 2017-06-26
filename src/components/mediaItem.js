import React from 'react';

export default function (props){
  if(!props.trailer) return false;

  const width = props.width || "auto";
  const height = props.height || "auto";
  const vid = props.trailer.split("v=")[1];

  return (
    <div className="media-wrapper">
      <iframe
        className="media-frame"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${vid}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}
