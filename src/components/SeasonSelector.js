import React from 'react'

const SeasonSelector = props => (
  <select className="select" onChange={ev => props.onChange(ev)}>
    {props.seasons.map(season => (
      <option key={season} value={season}>Temporada {season}</option>
        ))}
  </select>
  )

export default SeasonSelector
