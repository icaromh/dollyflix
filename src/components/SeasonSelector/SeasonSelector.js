import React from 'react'
import PropTypes from 'prop-types'

const SeasonSelector = props => (
  <select
    className="select"
    onChange={ev => props.onChange(ev)}
    onClick={ev => props.onClick(ev)}
    value={props.value}
  >
    {props.seasons.map(season => (
      <option
        key={season}
        value={season}
      >
        Temporada {season}
      </option>
    ))}
  </select>
)

SeasonSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  seasons: PropTypes.array,
  value: PropTypes.number,
}

SeasonSelector.defaultProps = {
  seasons: [],
  onClick: () => {},
  value: 1,
}

export default SeasonSelector
