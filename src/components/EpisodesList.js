import React from 'react'
import EpisodeBox from './EpisodeBox';


const EpisodesList = ({episodes, show, onClick}) => {
  if(!episodes) return false;

  return (
    <div className="episodes-list">
      {episodes.map(ep => (
        <EpisodeBox key={ep.id} episode={ep} show={show} onClick={onClick} />
      ))}
    </div>
  )
}

export default EpisodesList
