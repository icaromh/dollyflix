import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import axios from 'axios'
import ReactGA from 'react-ga'

import { API_URL, VIDEO_DOWNLOAD, EVENT_CATEGORY_VIDEO } from '../constants'
import DownloadButton from './DownloadButton'

const resizeImage = (url, size) => url && url.replace('w500', size)

const getUrlMedia = async (slug, season, number) => {
  const url = `${API_URL}/show/${slug}/${season}/${number}/media`
  return axios.get(url)
}

const PlayButtonIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="#FFF" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve">
    <g id="Play">
      <path d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995
        C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012
        C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993
        c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993z
        M25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z"
      />
      <g>
        <path
          d="M32,0C14.3268995,0,0,14.3268995,0,32s14.3268995,32,32,32s32-14.3269005,32-32S49.6730995,0,32,0z M32,62
          C15.4579,62,2,48.542099,2,32C2,15.4580002,15.4579,2,32,2c16.5419998,0,30,13.4580002,30,30C62,48.542099,48.5419998,62,32,62z"
        />
      </g>
    </g>
  </svg>
)

PlayButtonIcon.propTypes = {
  className: PropTypes.string.isRequired,
}

const EpisodeBox = ({ episode, show, onClick }) => {
  const number = parseInt(episode.number, 10)
  const season = parseInt(episode.season, 10)
  const linkTo = `/show/${show.slug}/${season}/${number}`

  const handleOnClick = async (ev) => {
    ev.preventDefault()
    const downloadTitle = `${show.slug}.S${number}.E${season}.mp4`
    const response = await getUrlMedia(show.slug, season, number)
    ReactGA.event({ category: EVENT_CATEGORY_VIDEO, action: VIDEO_DOWNLOAD, label: downloadTitle})
    if (response.status === 200 && response.data.url[0]) {

      const downloadUrl = response.data.url[0].file
      window.open(`${downloadUrl}?type=video/mp4&title=${downloadTitle}`, '_blank')
    } else {
      alert(`Houve um erro ao tentar baixar o episódio ${downloadTitle}`) // eslint-disable-line no-alert
    }
  }


  return (
    <div className="episode">
      <Link key={number} to={linkTo} onClick={() => onClick(episode)}>

        <picture className="show-item__image --is-episode">
          <source srcSet={resizeImage(episode.image, 'w200')} media="(max-width: 768px)" />
          <img srcSet={resizeImage(episode.image, 'w300')} alt={episode.title} />
        </picture>

        <PlayButtonIcon className="episode__thumbnail_play" />
      </Link>
      <div className="episode__meta">
        <Link key={number} to={linkTo} onClick={() => onClick(episode)}>
          <span className="episode__meta__number">{number}. </span>
          <span className="episode__meta__title">{episode.title}</span>
          <span className="episode__meta__runtime">{show.runtime}m</span>
        </Link>
      </div>
      <DownloadButton onClick={handleOnClick} />
    </div>
  )
}

EpisodeBox.propTypes = {
  episode: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default EpisodeBox
