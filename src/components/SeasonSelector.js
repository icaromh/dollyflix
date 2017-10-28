import React from 'react'

const SeasonSelector = (props) => {
  return (
    <select className="select" onChange={(ev) => props.onChange(ev)}>
      {props.seasons.map((season) => {
        return (
          <option key={season} value={season}>Temporada {season}</option>
        )
      })}
    </select>
  )
}

export default SeasonSelector
