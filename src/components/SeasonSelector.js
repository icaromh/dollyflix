import React from 'react'
import PropTypes from 'prop-types'

const SeasonSelector = props => (
  <select
    className="select"
    onChange={ev => props.onChange(ev)}
  >
    {props.seasons.map(season => (<option key={season} value={season}>Temporada {season}</option>)) }
  </select>
  )

SeasonSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  seasons: PropTypes.array,
}

SeasonSelector.defaultProps = {
  seasons: [],
}

export default SeasonSelector
