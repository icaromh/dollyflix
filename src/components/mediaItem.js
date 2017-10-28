import React from 'react';

export default function (props){
  if(!props.link) return false;

  const width = props.width || "auto";
  const height = props.height || "auto";

  return (
    <div className="media-wrapper">
      <iframe
        title="Episode Player"
        className="media-frame"
        width={width}
        height={height}
        src={props.link}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}
