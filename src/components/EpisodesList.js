import React from 'react'
import EpisodeBox from './EpisodeBox';


const EpisodesList = (props) => {

  if(!props.episodes) return false;

  return (
    <div className="episodes-list">
      {props.episodes.map((episode) => {
        return (
          <EpisodeBox
            key={episode.tvdb_id}
            data={episode}
            onClick={(episode) => props.onSelectEpisode(episode)}
          />
        )
      })}
    </div>
  )
}

export default EpisodesList
