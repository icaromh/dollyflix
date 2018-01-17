// import React from 'react'
import { connect } from 'react-redux'

import { selectShow } from '../../actions/show'
import FavoriteList from './FavoriteList'

const mapStateToProps = state => ({
  items: state.favoriteItems,
})

const mapDispatchToProps = dispatch => ({
  selectShow: show => dispatch(selectShow(show)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)
