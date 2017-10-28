import React from 'react'

const episodeStyle = (episode) => {
  return {
    backgroundImage: `url(${(episode.images && episode.images.medium)})`,
  };
}

const EpisodeBox = (props) => {
  return (
    <div className='episode' onClick={() => props.onClick(props.data)}>
      <div className="episode__bg" style={episodeStyle(props.data)}>
        <div className="episode__number">
          {props.data.episode}
        </div>
      </div>
      <div className="episode__meta">
        {props.data.title}
      </div>
    </div>
  )
}

export default EpisodeBox
