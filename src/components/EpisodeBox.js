import React from 'react'
import { Link } from 'react-router';

const episodeStyle = (episode) => {
  return {
    backgroundImage: `url(${episode.image})`,
  };
}

const EpisodeBox = (props) => {
  const episode = parseInt(props.data.number, 10)
  const season  = parseInt(props.data.season, 10)
  const linkTo = `/player/${props.show.slug}/${season}/${episode}`

  return (
    <div className='episode'>
      <Link
        key={props.data.number}
        to={linkTo}
      >
      <div className="episode__bg" style={episodeStyle(props.data)}>
        <div className="episode__number">
          {props.data.number}
        </div>
      </div>
      <div className="episode__meta">
        {props.data.title}
      </div>
      </Link>
    </div>
  )
}

export default EpisodeBox
