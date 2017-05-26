import React from 'react';

export default function(props){
  return (
    <img
      alt="Loading"
      className="spinner spinner-animated"
      src="./images/dollyflix.png"
      height={props.height || '120px'}
    />
  )
}
