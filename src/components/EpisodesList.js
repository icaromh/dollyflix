import React from 'react'
import EpisodeBox from './EpisodeBox';


const EpisodesList = (props) => {
  if(!props.episodes) return false;

  return (
    <div className="episodes-list">
      {props.episodes.map((episode) => {
        return (
          <EpisodeBox
            key={episode.id}
            data={episode}
            show={props.show}
          />
        )
      })}
    </div>
  )
}

export default EpisodesList
