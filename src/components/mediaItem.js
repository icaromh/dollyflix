import React from 'react';

export default function (props){
  const height = props.height || "315";
  const width = props.width || 1.78 * height;

  return (
    <div className="media-wrapper">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${props.trailer}`}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}
