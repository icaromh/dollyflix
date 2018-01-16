import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import SearchIcon from './SearchIcon'

import {
  EVENT_CATEGORY_SEARCH,
  SEARCH_TERM,
  SEARCH_FOCUS,
} from '../../constants'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }
  }

  handleInputChange = (ev) => {
    const term = ev.target.value
    this.setState({ term })
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault()
    const term = this.state.term.trim()
    const event = { category: EVENT_CATEGORY_SEARCH, action: SEARCH_TERM }

    ReactGA.event(event)
    this.props.onSubmit(term)
  }

  handleInputFocus = () => {
    ReactGA.event({ category: EVENT_CATEGORY_SEARCH, action: SEARCH_FOCUS })
  }

  render() {
    return (
      <form onSubmit={ev => this.handleFormSubmit(ev)} className="searchbox__form is-fluid">
        <SearchIcon className="searchbox__icon__form" />
        <input
          className="searchbar__input"
          ref={(el) => { this.inputSearch = el }}
          onFocus={this.handleInputFocus}
          onChange={this.handleInputChange}
          value={this.state.term}
          type="text"
          placeholder="busque por uma série"
        />
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchForm
